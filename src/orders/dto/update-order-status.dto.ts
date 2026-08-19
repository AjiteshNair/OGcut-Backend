import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, PaymentStatus } from '@prisma/client';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatus, {
    message: `status must be one of: ${Object.values(OrderStatus).join(', ')}`,
  })
  status!: OrderStatus;

  @IsOptional()
  @IsEnum(PaymentStatus, {
    message: `paymentStatus must be one of: ${Object.values(PaymentStatus).join(', ')}`,
  })
  paymentStatus?: PaymentStatus;
}