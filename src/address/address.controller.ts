import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getMyAddresses(@Req() req: any) {
    // Expects userId passed via query or JWT middleware
    const userId = req.headers['x-user-id']; 
    return this.addressService.getUserAddresses(userId);
  }

  @Post()
  async addAddress(@Req() req: any, @Body() dto: CreateAddressDto) {
    const userId = req.headers['x-user-id'];
    return this.addressService.createAddress(userId, dto);
  }
}