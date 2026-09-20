import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { RequestUser } from '../auth/types/authenticated-request';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('addresses')
@UseGuards(JwtAuthGuard)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@CurrentUser() user: RequestUser, @Body() dto: CreateAddressDto) {
    return this.addressService.create(user.userId, dto);
  }

  @Get()
  async findAllByUser(@CurrentUser() user: RequestUser) {
    return this.addressService.findAllByUser(user.userId);
  }

  @Delete(':id')
  async delete(@CurrentUser() user: RequestUser, @Param('id', ParseIntPipe) id: number) {
    return this.addressService.delete(user.userId, id);
  }
}
