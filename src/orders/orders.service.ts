import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(userId: string, dto: CreateOrderDto) {
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order must contain at least one item');
    }

    // Verify address belongs to user
    const address = await this.prisma.address.findFirst({
      where: { id: dto.addressId, userId },
    });

    if (!address) {
      throw new NotFoundException('Selected shipping address was not found');
    }

    // Calculate total amount
    const totalAmount = dto.items.reduce((sum, item) => {
      return sum + item.unitPrice * item.quantity;
    }, 0);

    return this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
          addressId: address.id,
          totalAmount,
          status: 'RECEIVED',
          paymentStatus: 'PAID', // Set default payment status (or mock payment)
        },
      });

      for (const item of dto.items) {
        let customShirtOrderId: string | undefined = undefined;

        // If this line item contains 3D custom shirt details, store them first
        if (item.customShirtOrder) {
          const createdCustomShirt = await tx.customShirtOrder.create({
            data: {
              fabricColor: item.customShirtOrder.fabricColor,
              placements: {
                create: item.customShirtOrder.placements.map((p) => ({
                  zone: p.zone,
                  imageUrl: p.imageUrl,
                  x: p.x,
                  y: p.y,
                  scale: p.scale,
                  width: p.width,
                  height: p.height,
                  centerX: p.centerX,
                  centerY: p.centerY,
                  clipWidth: p.clipWidth,
                  clipHeight: p.clipHeight,
                })),
              },
            },
          });
          customShirtOrderId = createdCustomShirt.id;
        }

        // Create the actual OrderItem linked to Order and CustomShirtOrder
        await tx.orderItem.create({
          data: {
            orderId: order.id,
            productId: item.productId ?? null,
            designId: item.designId ?? null,
            customShirtOrderId: customShirtOrderId ?? null,
            quantity: item.quantity,
            size: item.size ?? null,
            unitPrice: item.unitPrice,
          },
        });
      }

      return tx.order.findUnique({
        where: { id: order.id },
        include: {
          address: true,
          items: {
            include: {
              product: true,
              design: true,
              customShirtOrder: {
                include: {
                  placements: true,
                },
              },
            },
          },
        },
      });
    });
  }

  async getUserOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        address: true,
        items: {
          include: {
            product: true,
            design: true,
            customShirtOrder: {
              include: {
                placements: true,
              },
            },
          },
        },
      },
    });
  }

  async getOrderById(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId },
      include: {
        address: true,
        items: {
          include: {
            product: true,
            design: true,
            customShirtOrder: {
              include: {
                placements: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }
}