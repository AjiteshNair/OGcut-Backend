import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserAddresses(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        label: string;
        phone: string;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
        isDefault: boolean;
    }[]>;
    createAddress(userId: string, dto: CreateAddressDto): Promise<any>;
}
