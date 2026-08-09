// src/cart/cart.controller.ts
import { Controller, Post, Body, Logger } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() payload: any) {
    this.logger.log('--- Received POST /api/cart/add ---');
    this.logger.log(`Keys in payload: ${Object.keys(payload || {}).join(', ')}`);
    this.logger.log(`designImage length: ${payload?.designImage?.length || 'MISSING/UNDEFINED'}`);

    const order = await this.cartService.processAndSaveOrder(payload);
    return {
      success: true,
      orderId: order.id,
      order,
    };
  }
}