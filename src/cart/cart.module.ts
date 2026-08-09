import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { StorageService } from '../storage/storage.service'; // Adjust import paths if needed
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CartController],
  providers: [CartService, StorageService, PrismaService],
  exports: [CartService],
})
export class CartModule {}