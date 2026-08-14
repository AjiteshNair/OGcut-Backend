import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class DesignPlacementDto {
  @IsString()
  zone!: string; // 'front' | 'back' | 'leftSleeve' | 'rightSleeve'

  @IsString()
  imageUrl!: string;

  @IsNumber()
  x!: number;

  @IsNumber()
  y!: number;

  @IsNumber()
  scale!: number;

  @IsNumber()
  width!: number;

  @IsNumber()
  height!: number;

  @IsNumber()
  centerX!: number;

  @IsNumber()
  centerY!: number;

  @IsNumber()
  clipWidth!: number;

  @IsNumber()
  clipHeight!: number;
}

export class CustomShirtOrderDto {
  @IsString()
  fabricColor!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DesignPlacementDto)
  placements!: DesignPlacementDto[];
}

export class CreateOrderItemDto {
  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsString()
  designId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomShirtOrderDto)
  customShirtOrder?: CustomShirtOrderDto;

  @IsNumber()
  quantity!: number;

  @IsOptional()
  @IsString()
  size?: string;

  @IsNumber()
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