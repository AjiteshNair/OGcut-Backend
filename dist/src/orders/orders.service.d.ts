import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { RazorpayService } from '../razorpay/razorpay.service';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrdersService {
    private readonly prisma;
    private readonly razorpayService;
    private readonly configService;
    constructor(prisma: PrismaService, razorpayService: RazorpayService, configService: ConfigService);
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
        };
    }>;
    findAllForAdmin(): Promise<{
        success: boolean;
        data: {
            totalAmount: number;
            items: {
                unitPrice: number;
                product: {
                    name: string;
                    id: number;
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
                firstName: string;
                lastName: string | null;
                phone: string | null;
            };
            id: number;
            createdAt: Date;
            address: Prisma.JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
        }[];
    }>;
    findAdminOrderById(orderId: string): Promise<{
        success: boolean;
        data: {
            totalAmount: number;
            items: {
                unitPrice: number;
                product: {
                    name: string;
                    id: number;
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
                firstName: string;
                lastName: string | null;
                phone: string | null;
            };
            id: number;
            createdAt: Date;
            address: Prisma.JsonValue;
            uid: number;
            orderCode: string;
            coupon: string | null;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
        };
    }>;
    updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto): Promise<{
        success: boolean;
        data: {
            id: number;
            orderCode: string;
            status: import("@prisma/client").$Enums.OrderStatus;
            trackingNumber: string | null;
        };
    }>;
    getUserOrders(userId: string): Promise<void>;
    getOrderById(userId: number, identifier: string): Promise<{
        message: string;
        order: {
            items: ({
                product: {
                    images: {
                        id: number;
                        pid: number;
                        imgurl: string;
                        sortWeight: number;
                    }[];
                } & {
                    name: string;
                    id: number;
                    isActive: boolean;
                    desc: string;
                    price: Prisma.Decimal;
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
        };
    }>;
    createRazorpayOrder(orderId: number): Promise<{
        success: boolean;
        data: {
            razorpayOrderId: string;
            amount: string | number;
            currency: string;
            keyId: string | undefined;
        };
    }>;
    verifyPayment(dto: VerifyPaymentDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            orderCode: string;
            status: import("@prisma/client").$Enums.OrderStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus | null;
        };
    }>;
}
