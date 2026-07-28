import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(category?: string): Promise<import("./products.service").ProductResponse[]>;
    getProductById(id: string): Promise<import("./products.service").ProductResponse | null>;
}
