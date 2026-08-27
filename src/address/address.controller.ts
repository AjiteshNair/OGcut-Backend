import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    role: string;
  };
}

@Controller('addresses')
@UseGuards(JwtAuthGuard)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateAddressDto,
  ) {
    return this.addressService.create(req.user.userId, dto);
  }

  @Get()
  async findAllByUser(@Req() req: AuthenticatedRequest) {
    return this.addressService.findAllByUser(req.user.userId);
  }

  @Delete(':id')
  async delete(
    @Req() req: AuthenticatedRequest,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.addressService.delete(req.user.userId, id);
  }
}