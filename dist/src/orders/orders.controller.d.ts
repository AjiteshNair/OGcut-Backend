import type { RequestUser } from '../auth/types/authenticated-request';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { CreateRazorpayOrderDto } from './dto/create-razorpay-order.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrdersForAdmin(): Promise<{
        success: boolean;
        data: {
            totalAmount: number;
            items: {
                unitPrice: number;
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                color: string | null;
            }[];
            user: {
                id: number;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string | null;
                role: import("@prisma/client").$Enums.Role;
                phone: string | null;
                createdAt: Date;
                isActive: boolean;
            };
            _count: {
                user: number;
                items: number;
            };
            id: number;
            createdAt: Date;
            address: import("@prisma/client/runtime/client").JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        }[];
    }>;
    getAdminOrderById(id: string): Promise<{
        success: boolean;
        data: {
            totalAmount: number;
            items: {
                unitPrice: number;
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                color: string | null;
            }[];
            user: {
                id: number;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string | null;
                role: import("@prisma/client").$Enums.Role;
                phone: string | null;
                createdAt: Date;
                isActive: boolean;
            };
            _count: {
                user: number;
                items: number;
            };
            id: number;
            createdAt: Date;
            address: import("@prisma/client/runtime/client").JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        };
    }>;
    updateOrderStatus(id: string, dto: UpdateOrderStatusDto): Promise<{
        success: boolean;
        data: {
            id: number;
            orderCode: string;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
        };
    }>;
    createOrder(user: RequestUser, dto: CreateOrderDto): Promise<{
        message: string;
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
                color: string | null;
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
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        };
    }>;
    createRazorpayOrder(user: RequestUser, dto: CreateRazorpayOrderDto): Promise<{
        success: boolean;
        data: {
            razorpayOrderId: string;
            amount: number;
            currency: string;
            keyId: string;
        };
    }>;
    verifyPayment(user: RequestUser, dto: VerifyPaymentDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getUserOrders(user: RequestUser): Promise<{
        success: boolean;
        data: {
            totalAmount: number;
            items: {
                unitPrice: number;
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                color: string | null;
            }[];
            user: {
                id: number;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string | null;
                role: import("@prisma/client").$Enums.Role;
                phone: string | null;
                createdAt: Date;
                isActive: boolean;
            };
            _count: {
                user: number;
                items: number;
            };
            id: number;
            createdAt: Date;
            address: import("@prisma/client/runtime/client").JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        }[];
    }>;
    getOrderById(user: RequestUser, id: string): Promise<{
        message: string;
        order: {
            user: {
                id: number;
                email: string;
                passwordHash: string;
                firstName: string;
                lastName: string | null;
                role: import("@prisma/client").$Enums.Role;
                phone: string | null;
                createdAt: Date;
                isActive: boolean;
            };
            _count: {
                user: number;
                items: number;
            };
            items: {
                id: number;
                pid: number;
                oid: number;
                quantity: number;
                size: string;
                color: string | null;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
            }[];
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
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        };
    }>;
}
