import { StorageService } from '../storage/storage.service';
import { PrismaService } from '../prisma/prisma.service';
export interface CustomizationPayload {
    fabricColor: string;
    placements: Array<{
        zone: string;
        image: string;
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
export declare class CartService {
    private readonly storageService;
    private readonly prisma;
    private readonly logger;
    constructor(storageService: StorageService, prisma: PrismaService);
    processAndSaveOrder(payload: CustomizationPayload): Promise<{
        placements: {
            id: string;
            y: number;
            imageUrl: string;
            zone: string;
            x: number;
            scale: number;
            width: number;
            height: number;
            centerX: number;
            centerY: number;
            clipWidth: number;
            clipHeight: number;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        fabricColor: string;
    }>;
}
