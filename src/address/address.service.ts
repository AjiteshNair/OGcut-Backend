import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateAddressDto) {
    // A brand-new user's first address becomes their default automatically;
    // otherwise it's default only if they explicitly asked for it.
    const existingCount = await this.prisma.address.count({ where: { uid: userId } });
    const shouldBeDefault = dto.isDefault ?? existingCount === 0;

    if (shouldBeDefault) {
      await this.prisma.address.updateMany({
        where: { uid: userId, isDefault: true },
        data: { isDefault: false },
      });
    }

    return this.prisma.address.create({
      data: {
        user: {
          connect: { id: userId },
        },
        fullName: dto.fullName,
        phone: dto.phone,
        label: dto.label,
        line1: dto.line1,
        line2: dto.line2,
        city: dto.city,
        state: dto.state,
        pincode: dto.pincode,
        isDefault: shouldBeDefault,
      },
    });
  }

  async findAllByUser(userId: number) {
    return this.prisma.address.findMany({
      where: { uid: userId },
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
    });
  }

  async delete(userId: number, addressId: number) {
    const address = await this.prisma.address.findFirst({
      where: { id: addressId, uid: userId },
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    return this.prisma.address.delete({
      where: { id: addressId },
    });
  }
}