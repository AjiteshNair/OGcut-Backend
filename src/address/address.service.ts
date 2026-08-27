import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateAddressDto) {
    // if (dto.isDefault) {
    //   await this.prisma.address.updateMany({
    //     where: { uid: userId,isDefault: true },
    //     // data: { isDefault: false },
    //   });
    // }

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
        // isDefault: dto.isDefault ?? false,
      },
    });
  }

  async findAllByUser(userId: number) {
    return this.prisma.address.findMany({
      where: { uid: userId },
      orderBy: [
        // { isDefault: 'desc' },
        { createdAt: 'desc' },
      ],
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