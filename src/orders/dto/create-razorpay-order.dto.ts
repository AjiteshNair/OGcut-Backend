import { IsInt, IsPositive } from 'class-validator';

export class CreateRazorpayOrderDto {
  @IsInt()
  @IsPositive()
  orderId: number;
}
