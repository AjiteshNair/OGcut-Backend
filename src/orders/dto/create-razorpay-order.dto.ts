// src/orders/dto/create-razorpay-order.dto.ts
import { IsNumber, IsPositive } from 'class-validator';

export class CreateRazorpayOrderDto {
  @IsNumber()
  @IsPositive()
  orderId!: number; // Your internal PostgreSQL order ID
}