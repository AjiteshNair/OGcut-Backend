import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class DesignPlacementDto {
  @IsString()
  zone!: string;

  @IsString()
  imageUrl!: string;

  @IsNumber()
  @Type(() => Number)
  x!: number;

  @IsNumber()
  @Type(() => Number)
  y!: number;

  @IsNumber()
  @Type(() => Number)
  scale!: number;

  @IsNumber()
  @Type(() => Number)
  width!: number;

  @IsNumber()
  @Type(() => Number)
  height!: number;

  @IsNumber()
  @Type(() => Number)
  centerX!: number;

  @IsNumber()
  @Type(() => Number)
  centerY!: number;

  @IsNumber()
  @Type(() => Number)
  clipWidth!: number;

  @IsNumber()
  @Type(() => Number)
  clipHeight!: number;
}

export class CustomShirtOrderDto {
  @IsOptional()
  @IsString()
  fabricColor?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DesignPlacementDto)
  placements!: DesignPlacementDto[];
}

export class CreateOrderItemDto {
  @IsOptional()
  @IsString()
  productId?: string;

  @IsOptional()
  @IsString()
  designId?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => CustomShirtOrderDto)
  customShirtOrder?: CustomShirtOrderDto;

  @IsNumber()
  @Type(() => Number)
  quantity!: number;

  @IsOptional()
  @IsString()
  size?: string;

  @IsNumber()
  @Type(() => Number)
  unitPrice!: number;
}

export class CreateOrderDto {
  @IsString()
  addressId!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];
}