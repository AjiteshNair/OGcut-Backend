import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PlacementZone } from '@prisma/client';

export class PlacementDto {
  @IsEnum(PlacementZone)
  place!: PlacementZone;

  @IsString()
  @IsNotEmpty()
  imgurl!: string;

  @IsNumber()
  @Type(() => Number)
  xvalue!: number;

  @IsNumber()
  @Type(() => Number)
  yvalue!: number;

  @IsNumber()
  @Type(() => Number)
  zoom!: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  width?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  height?: number;
}

export class CreateOrderItemDto {
  @IsNumber()
  @Type(() => Number)
  productId!: number;

  @IsNumber()
  @Type(() => Number)
  quantity!: number;

  @IsString()
  @IsNotEmpty()
  size!: string;

  @IsNumber()
  @Type(() => Number)
  unitPrice!: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlacementDto)
  placements?: PlacementDto[];
}

export class CreateOrderDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  addressId?: number;

  @IsOptional()
  @IsObject()
  address?: Record<string, any>;

  @IsOptional()
  @IsString()
  coupon?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];
}