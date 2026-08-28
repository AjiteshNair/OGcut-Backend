import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrdersForAdmin(): Promise<void>;
    getAdminOrderById(id: string): Promise<void>;
    updateOrderStatus(id: string, dto: UpdateOrderStatusDto): Promise<void>;
    createOrder(req: any, dto: CreateOrderDto): Promise<{
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
        };
    }>;
    getUserOrders(req: any): Promise<void>;
    getOrderById(req: any, id: string): Promise<{
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
        };
    }>;
}
