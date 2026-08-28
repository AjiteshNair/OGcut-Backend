import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
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
        };
    }>;
    findAllForAdmin(): Promise<void>;
    findAdminOrderById(orderId: string): Promise<void>;
    updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto): Promise<void>;
    getUserOrders(userId: string): Promise<void>;
    getOrderById(userId: string, orderId: string): Promise<void>;
}
