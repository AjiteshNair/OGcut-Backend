import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(@Query('category') category?: string) {
    return this.productsService.findAll(category);
  }

  @Get(':id')
async getProductById(@Param('id') id: string) {
  const product = await this.productsService.findOne(id);
  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }
  return product;
  }
}
