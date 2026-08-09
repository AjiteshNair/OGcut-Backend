import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    private readonly logger;
    constructor(cartService: CartService);
    addToCart(payload: any): Promise<{
        success: boolean;
        orderId: string;
        order: {
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
        };
    }>;
}
