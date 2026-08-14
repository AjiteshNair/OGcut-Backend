import { Injectable, BadRequestException, Logger, NotFoundException } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { StorageService } from '../storage/storage.service';
import { PrismaService } from '../prisma/prisma.service';

export class CustomizationPlacementDto {
  zone!: string;
  image!: string; // Base64 Data URL
  coordinates!: {
    x: number;
    y: number;
    scale: number;
    width: number;
    height: number;
  };
  printZoneBounds!: {
    centerX: number;
    centerY: number;
    clipWidth: number;
    clipHeight: number;
  };
}

export class CustomizationPayload {
  fabricColor!: string;
  userId?: string;
  addressId?: string;
  unitPrice?: number;
  placements!: CustomizationPlacementDto[];
}

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(
    private readonly storageService: StorageService,
    private readonly prisma: PrismaService,
  ) {}

  // 1. Get paginated orders list for admin (20 items per page)
  async getAdminOrders(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [orders, totalCount] = await Promise.all([
      this.prisma.order.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
          address: true,
          items: {
            include: {
              product: true,
              customShirtOrder: {
                include: { placements: true },
              },
            },
          },
        },
      }),
      this.prisma.order.count(),
    ]);

    return {
      orders,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    };
  }

  // 2. Get single order details by ID for admin
  async getAdminOrderById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
          },
        },
        address: true,
        items: {
          include: {
            product: true,
            customShirtOrder: {
              include: { placements: true },
            },
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  // 3. Update main Order status
  async updateOrderStatus(id: string, status: OrderStatus) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  // 4. Process custom shirt order and link it to the main Order system
  async processAndSaveOrder(payload: CustomizationPayload) {
    const { fabricColor, placements, userId, addressId, unitPrice = 0 } = payload;

    if (!placements || placements.length === 0) {
      throw new BadRequestException('At least one design placement is required.');
    }

    this.logger.log(`Processing order with ${placements.length} placement(s)...`);

    // Upload placement images to Supabase
    const placementData = await Promise.all(
      placements.map(async (placement, index) => {
        if (!placement.image) {
          throw new BadRequestException(`Missing base64 image string in placement index ${index}`);
        }

        const fileName = `custom-${placement.zone}-${Date.now()}-${index}.png`;
        this.logger.log(`Uploading ${placement.zone} image to Supabase: ${fileName}`);

        const imageUrl = await this.storageService.uploadBase64Image(
          placement.image,
          'shirt-designs',
          `custom-orders/${fileName}`,
        );

        const coords = placement.coordinates || {};
        const bounds = placement.printZoneBounds || {};

        return {
          zone: placement.zone || 'front',
          imageUrl,
          x: Number(coords.x || 0),
          y: Number(coords.y || 0),
          scale: Number(coords.scale || 1),
          width: Number(coords.width || 0),
          height: Number(coords.height || 0),
          centerX: Number(bounds.centerX || 0),
          centerY: Number(bounds.centerY || 0),
          clipWidth: Number(bounds.clipWidth || 0),
          clipHeight: Number(bounds.clipHeight || 0),
        };
      }),
    );

    // Create the unified Order -> OrderItem -> CustomShirtOrder -> DesignPlacements
    const newOrder = await this.prisma.order.create({
      data: {
        userId: userId || null,
        addressId: addressId || null,
        status: OrderStatus.RECEIVED,
        totalAmount: unitPrice,
        items: {
          create: [
            {
              quantity: 1,
              unitPrice: unitPrice,
              customShirtOrder: {
                create: {
                  fabricColor: fabricColor || 'white',
                  placements: {
                    create: placementData,
                  },
                },
              },
            },
          ],
        },
      },
      include: {
        items: {
          include: {
            customShirtOrder: {
              include: { placements: true },
            },
          },
        },
      },
    });

    this.logger.log(`Unified Order successfully created with ID: ${newOrder.id}`);

    return newOrder;
  }
}