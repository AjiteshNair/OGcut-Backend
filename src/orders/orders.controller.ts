import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/types/authenticated-request';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { CreateRazorpayOrderDto } from './dto/create-razorpay-order.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
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

  // ==========================================
  // CUSTOMER / USER ROUTES
  // ==========================================

  @Post()
  async createOrder(@CurrentUser() user: RequestUser, @Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(user.userId, dto);
  }

  @Post('create-razorpay-order')
  async createRazorpayOrder(
    @CurrentUser() user: RequestUser,
    @Body() dto: CreateRazorpayOrderDto,
  ) {
    return this.ordersService.createRazorpayOrder(user.userId, dto);
  }

  @Post('verify-payment')
  async verifyPayment(@CurrentUser() user: RequestUser, @Body() dto: VerifyPaymentDto) {
    return this.ordersService.verifyPayment(user.userId, dto);
  }

  @Get()
  async getUserOrders(@CurrentUser() user: RequestUser) {
    return this.ordersService.getUserOrders(user.userId);
  }

  @Get(':id')
  async getOrderById(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.ordersService.getOrderById(user.userId, id);
  }
}