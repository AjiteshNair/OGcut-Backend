import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class VerifyPaymentDto {
  @IsInt()
  @IsPositive()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  razorpayOrderId: string;

  @IsString()
  @IsNotEmpty()
  razorpayPaymentId: string;

  @IsString()
  @IsNotEmpty()
  razorpaySignature: string;
}
