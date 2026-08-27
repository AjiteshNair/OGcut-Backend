import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(userId: string, dto: CreateOrderDto): Promise<void>;
    findAllForAdmin(): Promise<void>;
    findAdminOrderById(orderId: string): Promise<void>;
    updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto): Promise<void>;
    getUserOrders(userId: string): Promise<void>;
    getOrderById(userId: string, orderId: string): Promise<void>;
}
