import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateAddressDto): Promise<{
        id: string;
        userId: string;
        fullName: string;
        phone: string;
        label: string | null;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllByUser(userId: string): Promise<{
        id: string;
        userId: string;
        fullName: string;
        phone: string;
        label: string | null;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    delete(userId: string, addressId: string): Promise<{
        id: string;
        userId: string;
        fullName: string;
        phone: string;
        label: string | null;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
