import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('addresses')
@UseGuards(JwtAuthGuard)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Req() req: any, @Body() dto: CreateAddressDto) {
    // 1. Debug what req.user actually contains
  console.log('Decoded Auth User:', req.user);

  // 2. Fall back to sub if id isn't set on req.user
  const userId = req.user?.id || req.user?.sub;

    return this.addressService.create(req.user.userId, dto);
  }

  @Get()
  async findAllByUser(@Req() req: any) {
    return this.addressService.findAllByUser(req.user.id);
  }

  @Delete(':id')
  async delete(@Req() req: any, @Param('id') id: string) {
    return this.addressService.delete(req.user.id, id);
  }
}