import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CartService, CustomizationPayload } from './cart.service';

interface AuthenticatedRequest extends Request {
  user?: {
    userId?: number;
    id?: number;
    sub?: number;
    email: string;
    role: string;
  };
}

@Controller()
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private readonly cartService: CartService) {}

  @Post('cart/add')
  @UseGuards(JwtAuthGuard)
  async addToCart(
    @Req() req: AuthenticatedRequest,
    @Body() payload: CustomizationPayload,
  ) {
    this.logger.log('--- Received POST /cart/add ---');
    this.logger.log(`Keys in payload: ${Object.keys(payload || {}).join(', ')}`);

    // Extract logged-in user ID if not explicitly provided in body
    const userId =
      payload.userId ??
      req.user?.userId ??
      req.user?.id ??
      req.user?.sub;

    if (!userId) {
      throw new BadRequestException('User ID is required to process order.');
    }

    const order = await this.cartService.processAndSaveOrder({
      ...payload,
      userId: Number(userId),
    });

    return {
      success: true,
      orderId: order.id,
      orderCode: order.orderCode,
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
  async getAdminOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.getAdminOrderById(id);
  }

  @Patch('admin/orders/:id/status')
  async updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
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