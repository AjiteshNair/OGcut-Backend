import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrdersForAdmin(): Promise<void>;
    getAdminOrderById(id: string): Promise<void>;
    updateOrderStatus(id: string, dto: UpdateOrderStatusDto): Promise<void>;
    createOrder(req: any, dto: CreateOrderDto): Promise<void>;
    getUserOrders(req: any): Promise<void>;
    getOrderById(req: any, id: string): Promise<void>;
}
