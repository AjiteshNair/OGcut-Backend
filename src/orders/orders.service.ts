import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(userId: string, dto: CreateOrderDto) {
   console.log('inside createorder')
  }

  // ==========================================
  // ADMIN SERVICE METHODS
  // ==========================================

  async findAllForAdmin() {
   console.log('inside findAllForAdmin')
  }

  async findAdminOrderById(orderId: string) {
    console.log('inside findAdminOrderById')
  }

  async updateOrderStatus(orderId: string, dto: UpdateOrderStatusDto) {
    console.log('inside updateOrderStatus')
  }

  // ==========================================
  // CUSTOMER / USER SERVICE METHODS
  // ==========================================

  async getUserOrders(userId: string) {
    console.log('inside getUserOrders')
  }

  async getOrderById(userId: string, orderId: string) {
    console.log('inside getOrderById')
  }
}