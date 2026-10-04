import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRazorpayOrderDto } from './dto/create-razorpay-order.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PAYMENT_GATEWAY, PaymentGatewayClient } from './interfaces/payment-gateway.interface';

@Injectable()
export class OrderPaymentsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(PAYMENT_GATEWAY) private readonly paymentGateway: PaymentGatewayClient,
  ) {}

  /**
   * Creates a payment-gateway order for an existing, unpaid order and stores
   * its id against the order. The frontend uses the returned id to open the
   * gateway's checkout modal.
   */
  async createRazorpayOrder(userId: number, dto: CreateRazorpayOrderDto) {
    const order = await this.prisma.order.findFirst({
      where: { id: dto.orderId, uid: userId },
    });

    if (!order) {
      throw new NotFoundException('Order not found or access denied');
    }

    if (order.paymentStatus === 'PAID') {
      throw new BadRequestException('This order has already been paid for');
    }

    const gatewayOrder = await this.paymentGateway.createOrder(
      Number(order.totalAmount),
      order.orderCode,
    );

    await this.prisma.order.update({
      where: { id: order.id },
      data: { razorpayOrderId: gatewayOrder.id },
    });

    return {
      success: true,
      data: {
        razorpayOrderId: gatewayOrder.id,
        amount: gatewayOrder.amount,
        currency: gatewayOrder.currency,
        keyId: this.paymentGateway.getPublicKeyId(),
      },
    };
  }

  /**
   * Verifies the signature the gateway's checkout returns after a
   * successful payment, then marks the order as paid. This is the step
   * that actually confirms payment happened — the checkout modal
   * succeeding client-side is not itself trustworthy without this check.
   */
  async verifyPayment(userId: number, dto: VerifyPaymentDto) {
    const order = await this.prisma.order.findFirst({
      where: { id: dto.orderId, uid: userId },
    });

    if (!order) {
      throw new NotFoundException('Order not found or access denied');
    }

    if (order.razorpayOrderId !== dto.razorpayOrderId) {
      throw new BadRequestException('Razorpay order id does not match this order');
    }

    const isValid = this.paymentGateway.verifySignature(
      dto.razorpayOrderId,
      dto.razorpayPaymentId,
      dto.razorpaySignature,
    );

    if (!isValid) {
      await this.prisma.order.update({
        where: { id: order.id },
        data: { paymentStatus: 'FAILED' },
      });
      throw new BadRequestException('Payment signature verification failed');
    }

    await this.prisma.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PAID',
        razorpayPaymentId: dto.razorpayPaymentId,
        status: 'PROCESSING',
      },
    });

    return { success: true, message: 'Payment verified successfully' };
  }
}
