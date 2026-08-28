import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
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
  @IsNotEmpty()
  @Type(() => Number)
  productId!: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  quantity!: number;

  @IsString()
  @IsNotEmpty()
  size!: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  unitPrice!: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlacementDto)
  placements?: PlacementDto[];
}

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  addressId!: number;

  @IsOptional()
  @IsString()
  coupon?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];
}