export declare class DesignPlacementDto {
    zone: string;
    imageUrl: string;
    x: number;
    y: number;
    scale: number;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    clipWidth: number;
    clipHeight: number;
}
export declare class CustomShirtOrderDto {
    fabricColor?: string;
    placements: DesignPlacementDto[];
}
export declare class CreateOrderItemDto {
    productId?: string;
    designId?: string;
    customShirtOrder?: CustomShirtOrderDto;
    quantity: number;
    size?: string;
    unitPrice: number;
}
export declare class CreateOrderDto {
    addressId: string;
    items: CreateOrderItemDto[];
}
