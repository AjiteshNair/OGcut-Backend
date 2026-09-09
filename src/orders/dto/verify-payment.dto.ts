// src/orders/dto/verify-payment.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VerifyPaymentDto {
  @IsNumber()
  orderId!: number;

  @IsString()
  @IsNotEmpty()
  razorpayOrderId!: string;

  @IsString()
  @IsNotEmpty()
  razorpayPaymentId!: string;

  @IsString()
  @IsNotEmpty()
  razorpaySignature!: string;
}