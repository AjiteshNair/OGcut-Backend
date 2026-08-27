import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { OrderStatus, PlacementZone } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';

export class CustomizationPlacementDto {
  zone!: string; // 'front' | 'back' | 'left' | 'right'
  image!: string; // Base64 Data URL
  coordinates!: {
    x: number;
    y: number;
    scale: number;
    width?: number;
    height?: number;
  };
  printZoneBounds?: {
    centerX: number;
    centerY: number;
    clipWidth: number;
    clipHeight: number;
  };
}

export class CustomizationPayload {
  fabricColor!: string;
  userId!: number;
  productId!: number;
  address!: Record<string, any>; // Json snapshot of address
  unitPrice?: number;
  size?: string;
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
              firstName: true,
              lastName: true,
            },
          },
          items: {
            include: {
              product: true,
              placements: true,
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
  async getAdminOrderById(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        items: {
          include: {
            product: true,
            placements: true,
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
  async updateOrderStatus(id: number, status: OrderStatus) {
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
    const {
      placements,
      userId,
      productId,
      address,
      unitPrice = 0,
      size = 'M',
    } = payload;

    if (!placements || placements.length === 0) {
      throw new BadRequestException('At least one design placement is required.');
    }

    this.logger.log(`Processing order with ${placements.length} placement(s)...`);

    // Upload placement images to storage
    const placementData = await Promise.all(
      placements.map(async (placement, index) => {
        if (!placement.image) {
          throw new BadRequestException(
            `Missing base64 image string in placement index ${index}`,
          );
        }

        const fileName = `custom-${placement.zone}-${Date.now()}-${index}.png`;
        this.logger.log(
          `Uploading ${placement.zone} image to Storage: ${fileName}`,
        );

        const imageUrl = await this.storageService.uploadBase64Image(
          placement.image,
          'shirt-designs',
          `custom-orders/${fileName}`,
        );

        const coords = placement.coordinates || {};

        // Safely map string zone to PlacementZone enum
        const zoneKey = placement.zone.toLowerCase() as PlacementZone;
        const validZone = Object.values(PlacementZone).includes(zoneKey)
          ? zoneKey
          : PlacementZone.front;

        return {
          place: validZone,
          imgurl: imageUrl,
          xvalue: Number(coords.x || 0),
          yvalue: Number(coords.y || 0),
          zoom: Number(coords.scale || 1.0),
          width: coords.width ? Number(coords.width) : null,
          height: coords.height ? Number(coords.height) : null,
        };
      }),
    );

    // Generate public unique orderCode
    const orderCode = `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Create Order -> OrderItem -> CustomPlacement records
    const newOrder = await this.prisma.order.create({
      data: {
        orderCode,
        uid: userId,
        address: address ?? {},
        status: OrderStatus.PENDING,
        totalAmount: unitPrice,
        items: {
          create: [
            {
              pid: productId,
              quantity: 1,
              size: size,
              unitPrice: unitPrice,
              placements: {
                create: placementData,
              },
            },
          ],
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

    this.logger.log(`Unified Order successfully created with ID: ${newOrder.id}`);

    return newOrder;
  }
}