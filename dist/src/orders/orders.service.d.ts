import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(userId: number, dto: CreateOrderDto): Promise<{
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
                unitPrice: Prisma.Decimal;
            })[];
        } & {
            id: number;
            createdAt: Date;
            address: Prisma.JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalAmount: Prisma.Decimal;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        };
    }>;
    getUserOrders(userId: number): Promise<{
        success: boolean;
        data: ({
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
                unitPrice: Prisma.Decimal;
            }[];
        } & {
            id: number;
            createdAt: Date;
            address: Prisma.JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalAmount: Prisma.Decimal;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        } & {
            totalAmount: number;
            items: {
                unitPrice: number;
            }[];
        })[];
    }>;
    getOrderById(userId: number, identifier: string): Promise<{
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
                unitPrice: Prisma.Decimal;
            }[];
        } & {
            id: number;
            createdAt: Date;
            address: Prisma.JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            totalAmount: Prisma.Decimal;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
            razorpayOrderId: string | null;
            razorpayPaymentId: string | null;
        };
    }>;
}
