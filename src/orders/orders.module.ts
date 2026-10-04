import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { AdminOrdersService } from './admin-orders.service';
import { OrderPaymentsService } from './order-payments.service';
import { RazorpayClient } from './razorpay.client';
import { PAYMENT_GATEWAY } from './interfaces/payment-gateway.interface';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    AdminOrdersService,
    OrderPaymentsService,
    RazorpayClient,
    // Binds the PaymentGatewayClient abstraction to RazorpayClient.
    // Swapping providers later (or adding a second one) means writing a
    // new class and changing this one line — nothing that consumes
    // PAYMENT_GATEWAY needs to change. useExisting (not useClass) so this
    // resolves to the same RazorpayClient singleton already registered
    // above, rather than constructing a second instance.
    { provide: PAYMENT_GATEWAY, useExisting: RazorpayClient },
  ],
  exports: [OrdersService],
})
export class OrdersModule {}