import {
  Controller,
  Post,
  Body,
  Logger,
  Get,
  Param,
  Patch,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { CartService, CustomizationPayload } from './cart.service';

@Controller()
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private readonly cartService: CartService) {}

  @Post('cart/add')
  async addToCart(@Body() payload: CustomizationPayload) {
    this.logger.log('--- Received POST /cart/add ---');
    this.logger.log(`Keys in payload: ${Object.keys(payload || {}).join(', ')}`);

    const order = await this.cartService.processAndSaveOrder(payload);

    return {
      success: true,
      orderId: order.id,
      order,
    };
  }

  @Get('admin/orders')
  async getAdminOrders(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    return this.cartService.getAdminOrders(page, limit);
  }

  @Get('admin/orders/:id')
  async getAdminOrderById(@Param('id') id: string) {
    return this.cartService.getAdminOrderById(id);
  }

  @Patch('admin/orders/:id/status')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: OrderStatus,
  ) {
    if (!status || !Object.values(OrderStatus).includes(status)) {
      throw new BadRequestException(
        `Invalid status. Must be one of: ${Object.values(OrderStatus).join(', ')}`,
      );
    }

    return this.cartService.updateOrderStatus(id, status);
  }
}