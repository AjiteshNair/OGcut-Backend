import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()

  async getProducts(@Query('category') category?: string) {
    return this.productsService.findAll(category);
  }

  @Get('prices')
  async getProductPrices(@Query('ids') ids?: string) {
    if (!ids) {
      throw new BadRequestException('Query parameter "ids" is required');
    }

    const parsedIds = ids
      .split(',')
      .map((id) => parseInt(id.trim(), 10))
      .filter((id) => !isNaN(id));

    if (parsedIds.length === 0) {
      throw new BadRequestException('Invalid product IDs provided');
    }

    return this.productsService.findPricesByIds(parsedIds);
  }

  @Get(':id')

  async getProductById(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }
}