import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { RazorpayClient } from './razorpay.client';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, RazorpayClient],
  exports: [OrdersService],
})
export class OrdersModule {}