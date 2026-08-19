import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(userId: string, dto: CreateOrderDto): Promise<({
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
    }) | null>;
    findAllForAdmin(): Promise<({
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
    })[]>;
    findAdminOrderById(orderId: string): Promise<{
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
    updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto): Promise<{
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
    updateStatus(id: string, status: any): Promise<{
        id: string;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        addressId: string | null;
        status: import("@prisma/client").$Enums.OrderStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getUserOrders(userId: string): Promise<({
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
    })[]>;
    getOrderById(userId: string, orderId: string): Promise<{
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
            design: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                imageUrl: string;
                publicId: string | null;
                authorId: string | null;
                isPublic: boolean;
                category: string | null;
                tags: string[];
                defaultZone: string;
                customWidth: number;
                customHeight: number;
            } | null;
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
}
