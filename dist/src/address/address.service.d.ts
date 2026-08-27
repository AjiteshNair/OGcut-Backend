import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateAddressDto): Promise<{
        id: number;
        phone: string;
        createdAt: Date;
        uid: number;
        label: string;
        fullName: string;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
    }>;
    findAllByUser(userId: number): Promise<{
        id: number;
        phone: string;
        createdAt: Date;
        uid: number;
        label: string;
        fullName: string;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
    }[]>;
    delete(userId: number, addressId: number): Promise<{
        id: number;
        phone: string;
        createdAt: Date;
        uid: number;
        label: string;
        fullName: string;
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        pincode: string;
    }>;
}
