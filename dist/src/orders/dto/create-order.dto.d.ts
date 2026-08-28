import { PlacementZone } from '@prisma/client';
export declare class PlacementDto {
    place: PlacementZone;
    imgurl: string;
    xvalue: number;
    yvalue: number;
    zoom: number;
    width?: number;
    height?: number;
}
export declare class CreateOrderItemDto {
    productId: number;
    quantity: number;
    size: string;
    color?: string;
    unitPrice: number;
    placements?: PlacementDto[];
}
export declare class CreateOrderDto {
    addressId: number;
    coupon?: string;
    items: CreateOrderItemDto[];
}
