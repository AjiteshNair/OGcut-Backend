import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(req: any, dto: CreateAddressDto): Promise<{
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
    findAllByUser(req: any): Promise<{
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
    delete(req: any, id: string): Promise<{
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
