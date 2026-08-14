import { OrderStatus } from '@prisma/client';
import { CartService, CustomizationPayload } from './cart.service';
export declare class CartController {
    private readonly cartService;
    private readonly logger;
    constructor(cartService: CartService);
    addToCart(payload: CustomizationPayload): Promise<{
        success: boolean;
        orderId: string;
        order: {
            items: ({
                customShirtOrder: ({
                    placements: {
                        id: string;
                        imageUrl: string;
                        customShirtOrderId: string;
                        zone: string;
                        x: number;
                        y: number;
                        scale: number;
                        width: number;
                        height: number;
                        centerX: number;
                        centerY: number;
                        clipWidth: number;
                        clipHeight: number;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    fabricColor: string;
                }) | null;
            } & {
                id: string;
                createdAt: Date;
                orderId: string;
                productId: number | null;
                designId: string | null;
                customShirtOrderId: string | null;
                quantity: number;
                size: string | null;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: string;
            userId: string | null;
            createdAt: Date;
            updatedAt: Date;
            addressId: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
        };
    }>;
    getAdminOrders(page: number, limit: number): Promise<{
        orders: ({
            user: {
                id: string;
                email: string;
                first_name: string | null;
                last_name: string | null;
            } | null;
            address: {
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
            } | null;
            items: ({
                product: {
                    name: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string;
                    price: import("@prisma/client-runtime-utils").Decimal;
                    images: string[];
                    inventory: number;
                    designType: string;
                    graphicUrl: string | null;
                    mockupUrl: string | null;
                    targetZone: string;
                    categoryId: number;
                } | null;
                customShirtOrder: ({
                    placements: {
                        id: string;
                        imageUrl: string;
                        customShirtOrderId: string;
                        zone: string;
                        x: number;
                        y: number;
                        scale: number;
                        width: number;
                        height: number;
                        centerX: number;
                        centerY: number;
                        clipWidth: number;
                        clipHeight: number;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    fabricColor: string;
                }) | null;
            } & {
                id: string;
                createdAt: Date;
                orderId: string;
                productId: number | null;
                designId: string | null;
                customShirtOrderId: string | null;
                quantity: number;
                size: string | null;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: string;
            userId: string | null;
            createdAt: Date;
            updatedAt: Date;
            addressId: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getAdminOrderById(id: string): Promise<{
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
        } | null;
        address: {
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
        } | null;
        items: ({
            product: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                images: string[];
                inventory: number;
                designType: string;
                graphicUrl: string | null;
                mockupUrl: string | null;
                targetZone: string;
                categoryId: number;
            } | null;
            customShirtOrder: ({
                placements: {
                    id: string;
                    imageUrl: string;
                    customShirtOrderId: string;
                    zone: string;
                    x: number;
                    y: number;
                    scale: number;
                    width: number;
                    height: number;
                    centerX: number;
                    centerY: number;
                    clipWidth: number;
                    clipHeight: number;
                }[];
            } & {
                id: string;
                createdAt: Date;
                fabricColor: string;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            orderId: string;
            productId: number | null;
            designId: string | null;
            customShirtOrderId: string | null;
            quantity: number;
            size: string | null;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
        })[];
    } & {
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        addressId: string | null;
        status: import("@prisma/client").$Enums.OrderStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateOrderStatus(id: string, status: OrderStatus): Promise<{
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        addressId: string | null;
        status: import("@prisma/client").$Enums.OrderStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
