import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // ==========================================
  // ADMIN ROUTES (Must come before generic :id routes to prevent route collisions)
  // ==========================================

  @UseGuards(AdminGuard)
  @Get('admin/all')
  async getAllOrdersForAdmin() {
    return this.ordersService.findAllForAdmin();
  }

  @UseGuards(AdminGuard)
  @Get('admin/:id')
  async getAdminOrderById(@Param('id') id: string) {
    return this.ordersService.findAdminOrderById(id);
  }

  @UseGuards(AdminGuard)
  @Patch('admin/:id/status')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body() dto: UpdateOrderStatusDto,
  ) {
    return this.ordersService.updateOrderStatus(id, dto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.ordersService.updateStatus(id, status);
  }


  // ==========================================
  // CUSTOMER / USER ROUTES
  // ==========================================

  @Post()
  async createOrder(@Req() req: any, @Body() dto: CreateOrderDto) {
    console.log("hi")
    console.log('Creating order for user:', req.user.userId.customShirtOrder);
    return this.ordersService.createOrder(req.user.userId, dto);
  }

  @Get()
  async getUserOrders(@Req() req: any) {
    return this.ordersService.getUserOrders(req.user.userId);
  }

  @Get(':id')
  async getOrderById(@Req() req: any, @Param('id') id: string) {
    return this.ordersService.getOrderById(req.user.userId, id);
  }
}