import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async toggleSaveDesign(userId: string, productId: number) {
    const existing = await this.prisma.savedDesign.findFirst({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });

    if (existing) {
      await this.prisma.savedDesign.delete({
        where: { id: existing.id },
      });
      return { saved: false };
    } else {
      await this.prisma.savedDesign.create({
        data: { user_id: userId, product_id: productId },
      });
      return { saved: true };
    }
  }

  async getSavedDesigns(userId: string) {
    return this.prisma.savedDesign.findMany({
      where: { user_id: userId },
      include: { product: true },
    });
  }
}