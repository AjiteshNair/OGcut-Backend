export type Category = {
    id: string;
    name: string;
    slug: string;
};
export declare class CategoriesService {
    private readonly categories;
    findAll(): Category[];
    findOne(id: string): Category | undefined;
}
