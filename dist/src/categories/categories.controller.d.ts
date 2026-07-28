import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): import("./categories.service").Category[];
    getCategoryById(id: string): import("./categories.service").Category;
}
