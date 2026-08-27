import { OrderStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
export declare class CustomizationPlacementDto {
    zone: string;
    image: string;
    coordinates: {
        x: number;
        y: number;
        scale: number;
        width?: number;
        height?: number;
    };
    printZoneBounds?: {
        centerX: number;
        centerY: number;
        clipWidth: number;
        clipHeight: number;
    };
}
export declare class CustomizationPayload {
    fabricColor: string;
    userId: number;
    productId: number;
    address: Record<string, any>;
    unitPrice?: number;
    size?: string;
    placements: CustomizationPlacementDto[];
}
export declare class CartService {
    private readonly storageService;
    private readonly prisma;
    private readonly logger;
    constructor(storageService: StorageService, prisma: PrismaService);
    getAdminOrders(page?: number, limit?: number): Promise<{
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
    processAndSaveOrder(payload: CustomizationPayload): Promise<{
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
    }>;
}
