import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';
import { PrismaService } from '../prisma/prisma.service';

export interface CustomizationPayload {
  fabricColor: string;
  placements: Array<{
    zone: string;
    image: string; // Base64 Data URL
    coordinates: {
      x: number;
      y: number;
      scale: number;
      width: number;
      height: number;
    };
    printZoneBounds: {
      centerX: number;
      centerY: number;
      clipWidth: number;
      clipHeight: number;
    };
  }>;
}

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(
    private readonly storageService: StorageService,
    private readonly prisma: PrismaService,
  ) {}

  async processAndSaveOrder(payload: CustomizationPayload) {
    const { fabricColor, placements } = payload;

    if (!placements || placements.length === 0) {
      throw new BadRequestException('At least one design placement is required.');
    }

    this.logger.log(`Processing order with ${placements.length} placement(s)...`);

    // 1. Process each placement: upload its image to Supabase and construct DB data
    const placementData = await Promise.all(
      placements.map(async (placement, index) => {
        let imageUrl = '';

        if (placement.image) {
          const fileName = `custom-${placement.zone}-${Date.now()}-${index}.png`;
          
          this.logger.log(`Uploading ${placement.zone} image to Supabase: ${fileName}`);

          imageUrl = await this.storageService.uploadBase64Image(
            placement.image,
            'shirt-designs', // Bucket name in Supabase
            `custom-orders/${fileName}`,
          );

          this.logger.log(`Uploaded ${placement.zone} URL: ${imageUrl}`);
        } else {
          throw new BadRequestException(`Missing base64 image string in placement index ${index}`);
        }

        // Extract nested structure to flat Prisma DesignPlacement model fields
        const coords = placement.coordinates || {};
        const bounds = placement.printZoneBounds || {};

        return {
          zone: placement.zone || 'front',
          imageUrl: imageUrl,
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

    // 2. Save order and nested placements to PostgreSQL database via Prisma
    const customOrder = await this.prisma.customShirtOrder.create({
      data: {
        fabricColor: fabricColor || 'white',
        placements: {
          create: placementData,
        },
      },
      include: {
        placements: true,
      },
    });

    this.logger.log(`Custom order successfully created with ID: ${customOrder.id}`);

    return customOrder;
  }
}