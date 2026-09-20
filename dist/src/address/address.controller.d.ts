import type { RequestUser } from '../auth/types/authenticated-request';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(user: RequestUser, dto: CreateAddressDto): Promise<{
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
        isDefault: boolean;
    }>;
    findAllByUser(user: RequestUser): Promise<{
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
        isDefault: boolean;
    }[]>;
    delete(user: RequestUser, id: number): Promise<{
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
        isDefault: boolean;
    }>;
}
