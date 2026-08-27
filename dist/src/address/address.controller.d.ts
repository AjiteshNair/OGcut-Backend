import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
interface AuthenticatedRequest extends Request {
    user: {
        userId: number;
        email: string;
        role: string;
    };
}
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(req: AuthenticatedRequest, dto: CreateAddressDto): Promise<{
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
    findAllByUser(req: AuthenticatedRequest): Promise<{
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
    delete(req: AuthenticatedRequest, id: number): Promise<{
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
export {};
