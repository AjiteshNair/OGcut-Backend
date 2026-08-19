import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

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

  // Calculate total amount safely
  const totalAmount = dto.items.reduce((sum, item) => {
    return sum + Number(item.unitPrice) * item.quantity;
  }, 0);

  return this.prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        addressId: address.id,
        totalAmount,
        status: 'RECEIVED',
        paymentStatus: 'PAID',
      },
    });

    for (const item of dto.items) {
      let customShirtOrderId: string | null = null;

      // Ensure customShirtOrder payload exists and contains placements
      if (item.customShirtOrder && Array.isArray(item.customShirtOrder.placements) && item.customShirtOrder.placements.length > 0) {
        const createdCustomShirt = await tx.customShirtOrder.create({
          data: {
            fabricColor: item.customShirtOrder.fabricColor || '#ffffff',
            placements: {
              create: item.customShirtOrder.placements.map((p) => ({
                zone: p.zone,
                imageUrl: p.imageUrl,
                x: Number(p.x) || 0,
                y: Number(p.y) || 0,
                scale: Number(p.scale) || 1,
                width: Number(p.width) || 400,
                height: Number(p.height) || 400,
                centerX: Number(p.centerX) || 1024,
                centerY: Number(p.centerY) || 1024,
                clipWidth: Number(p.clipWidth) || 800,
                clipHeight: Number(p.clipHeight) || 1000,
              })),
            },
          },
        });
        customShirtOrderId = createdCustomShirt.id;
      }

      // Create actual OrderItem
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId ? Number(item.productId) : null,
          designId: item.designId ?? null,
          customShirtOrderId: customShirtOrderId,
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

  // ==========================================
  // ADMIN SERVICE METHODS
  // ==========================================

  async findAllForAdmin() {
    return this.prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
            role: true,
          },
        },
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

  async findAdminOrderById(orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
            role: true,
          },
        },
        address: true,
        items: {
          include: {
            product: true,
            design: true,
            customShirtOrder: {
              include: {
                placements: true, // Includes coordinates & Supabase imageUrls for reconstitution
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    return order;
  }

  async updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto) {
    // Ensure order exists
    await this.findAdminOrderById(orderId);

    return this.prisma.order.update({
      where: { id: orderId },
      data: {
        status: dto.status,
        ...(dto.paymentStatus && { paymentStatus: dto.paymentStatus }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
            role: true,
          },
        },
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

  async updateStatus(id: string, status: any) {
  return this.prisma.order.update({
    where: { id },
    data: { status },
  });
}

  // ==========================================
  // CUSTOMER / USER SERVICE METHODS
  // ==========================================

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