import { OrderStatus } from '@prisma/client';
import { CartService, CustomizationPayload } from './cart.service';
interface AuthenticatedRequest extends Request {
    user?: {
        userId?: number;
        id?: number;
        sub?: number;
        email: string;
        role: string;
    };
}
export declare class CartController {
    private readonly cartService;
    private readonly logger;
    constructor(cartService: CartService);
    addToCart(req: AuthenticatedRequest, payload: CustomizationPayload): Promise<{
        success: boolean;
        orderId: number;
        orderCode: string;
        order: {
            items: ({
                placements: {
                    id: number;
                    imgurl: string;
                    oiid: number;
                    place: import("@prisma/client").$Enums.PlacementZone;
                    xvalue: number;
                    yvalue: number;
                    zoom: number;
                    height: number | null;
                    width: number | null;
                }[];
            } & {
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: number;
            createdAt: Date;
            address: import("@prisma/client/runtime/client").JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
        };
    }>;
    getAdminOrders(page: number, limit: number): Promise<{
        orders: ({
            user: {
                id: number;
                email: string;
                firstName: string;
                lastName: string | null;
            };
            items: ({
                product: {
                    name: string;
                    id: number;
                    isActive: boolean;
                    desc: string;
                    price: import("@prisma/client-runtime-utils").Decimal;
                    type: import("@prisma/client").$Enums.ProductType;
                };
                placements: {
                    id: number;
                    imgurl: string;
                    oiid: number;
                    place: import("@prisma/client").$Enums.PlacementZone;
                    xvalue: number;
                    yvalue: number;
                    zoom: number;
                    height: number | null;
                    width: number | null;
                }[];
            } & {
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: number;
            createdAt: Date;
            address: import("@prisma/client/runtime/client").JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getAdminOrderById(id: number): Promise<{
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string | null;
        };
        items: ({
            product: {
                name: string;
                id: number;
                isActive: boolean;
                desc: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                type: import("@prisma/client").$Enums.ProductType;
            };
            placements: {
                id: number;
                imgurl: string;
                oiid: number;
                place: import("@prisma/client").$Enums.PlacementZone;
                xvalue: number;
                yvalue: number;
                zoom: number;
                height: number | null;
                width: number | null;
            }[];
        } & {
            id: number;
            pid: number;
            oid: number;
            quantity: number;
            size: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date;
        address: import("@prisma/client/runtime/client").JsonValue;
        uid: number;
        orderCode: string;
        coupon: string | null;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        trackingNumber: string | null;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
    }>;
    updateOrderStatus(id: number, status: OrderStatus): Promise<{
        id: number;
        createdAt: Date;
        address: import("@prisma/client/runtime/client").JsonValue;
        uid: number;
        orderCode: string;
        coupon: string | null;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        trackingNumber: string | null;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
    }>;
}
export {};
