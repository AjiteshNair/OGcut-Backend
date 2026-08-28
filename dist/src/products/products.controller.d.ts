import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(category?: string): Promise<import("./products.service").ProductResponse[] | null>;
    getProductPrices(ids?: string): Promise<Record<number, number>>;
    getProductById(id: number): Promise<import("./products.service").ProductResponse>;
}
