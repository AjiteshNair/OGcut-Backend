import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { ADMIN_ORDER_INCLUDE, parseOrderId, toOrderResponse } from './mappers/order-response.mapper';

@Injectable()
export class AdminOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllForAdmin() {
    const orders = await this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: ADMIN_ORDER_INCLUDE,
    });

    return {
      success: true,
      data: orders.map((order) => toOrderResponse(order)),
    };
  }

  async findAdminOrderById(orderId: string) {
    const numericId = parseOrderId(orderId);

    const order = await this.prisma.order.findUnique({
      where: { id: numericId },
      include: ADMIN_ORDER_INCLUDE,
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    return {
      success: true,
      data: toOrderResponse(order),
    };
  }

  async updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto) {
    const numericId = parseOrderId(orderId);

    // Ensure at least one field is being updated
    if (dto.status === undefined && dto.trackingNumber === undefined) {
      throw new BadRequestException('At least status or trackingNumber must be provided');
    }

    const existingOrder = await this.prisma.order.findUnique({
      where: { id: numericId },
    });

    if (!existingOrder) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    const updatedOrder = await this.prisma.order.update({
      where: { id: numericId },
      data: {
        ...(dto.status !== undefined && { status: dto.status }),
        ...(dto.trackingNumber !== undefined && { trackingNumber: dto.trackingNumber }),
      },
      select: {
        id: true,
        orderCode: true,
        status: true,
        trackingNumber: true,
      },
    });

    return {
      success: true,
      data: updatedOrder,
    };
  }
}
