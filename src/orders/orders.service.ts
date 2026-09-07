import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(userId: number, dto: CreateOrderDto) {
    console.log(">>>>>>>>>>>>>>>>>>",dto)
    // 1. Fetch user address to store as a permanent JSON snapshot on the Order
    const address = await this.prisma.address.findFirst({
      where: {
        id: dto.addressId,
        uid: userId,
      },
    });

    if (!address) {
      throw new NotFoundException('Address not found or does not belong to user');
    }

    // 2. Fetch products to verify existence and use actual backend prices
    const productIds = dto.items.map((item) => item.productId);
    const products = await this.prisma.product.findMany({
      where: {
        id: { in: productIds },
        isActive: true,
      },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));

    // Validate that all submitted products exist in DB
    for (const item of dto.items) {
      if (!productMap.has(item.productId)) {
        throw new BadRequestException(
          `Product with ID ${item.productId} is invalid or inactive`,
        );
      }
    }

    // 3. Compute reliable canonical prices server-side
    let calculatedTotal = 0;
    const itemsToCreate = dto.items.map((item) => {
      const product = productMap.get(item.productId)!;
      // Prefer server price over client price to prevent price tampering
      const unitPrice = product.price;
      const lineTotal = Number(unitPrice) * item.quantity;
      calculatedTotal += lineTotal;

      return {
        pid: item.productId,
        quantity: item.quantity,
        size: item.size,
        color: item.color || null,
        unitPrice: unitPrice,
        // Build nested placement records if present
        ...(item.placements && item.placements.length > 0
          ? {
              placements: {
                create: item.placements.map((p) => ({
                  place: p.place,
                  imgurl: p.imgurl,
                  xvalue: p.xvalue,
                  yvalue: p.yvalue,
                  zoom: p.zoom ?? 1.0,
                  height: p.height ?? null,
                  width: p.width ?? null,
                })),
              },
            }
          : {}),
      };
    });

    // 4. Generate date-stamped public orderCode (e.g., ORD-20260828-A1B2C3)
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomHex = randomBytes(3).toString('hex').toUpperCase();
    const orderCode = `ORD-${todayStr}-${randomHex}`;

    // 5. Create Order, OrderItems, and CustomPlacements within a transaction
    const newOrder = await this.prisma.order.create({
      data: {
        orderCode,
        uid: userId,
        address: {
          id: address.id,
          label: address.label,
          fullName: address.fullName,
          line1: address.line1,
          line2: address.line2,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          phone: address.phone,
        } as Prisma.JsonObject,
        coupon: dto.coupon || null,
        status: 'PENDING',
        paymentStatus: 'UNPAID',
        totalAmount: calculatedTotal,
        items: {
          create: itemsToCreate,
        },
      },
      include: {
        items: {
          include: {
            placements: true,
          },
        },
      },
    });

    return {
      message: 'Order created successfully',
      order: newOrder,
    };
  }

  // ==========================================
  // ADMIN SERVICE METHODS
  // ==========================================

  async findAllForAdmin() {
    const orders = await this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
            placements: true,
          },
        },
      },
    });

    return {
      success: true,
      data: orders.map((order) => ({
        ...order,
        totalAmount: Number(order.totalAmount),
        items: order.items.map((item) => ({
          ...item,
          unitPrice: Number(item.unitPrice),
        })),
      })),
    };
  }

  async findAdminOrderById(orderId: string) {
    const numericId = parseInt(orderId, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid order ID provided');
    }

    const order = await this.prisma.order.findUnique({
      where: { id: numericId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
            placements: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    return {
      success: true,
      data: {
        ...order,
        totalAmount: Number(order.totalAmount),
        items: order.items.map((item) => ({
          ...item,
          unitPrice: Number(item.unitPrice),
        })),
      },
    };
  }

  async updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto) {
    const numericId = parseInt(orderId, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid order ID provided');
    }

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

  // ==========================================
  // CUSTOMER / USER SERVICE METHODS
  // ==========================================

  async getUserOrders(userId: string) {
    console.log('inside getUserOrders');
  }

  async getOrderById(userId: number, identifier: string) {
    const parsedId = parseInt(identifier, 10);
    const isNumeric = !isNaN(parsedId);

    const order = await this.prisma.order.findFirst({
      where: {
        uid: userId,
        OR: [
          ...(isNumeric ? [{ id: parsedId }] : []),
          { orderCode: identifier },
        ],
      },
      include: {
        items: {
          include: {
            product: {
              include: { images: { take: 1 } },
            },
            placements: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found or access denied');
    }

    return { message: 'Order fetched successfully', order };
  }
}