import { Injectable } from '@nestjs/common';

export type Category = {
  id: string;
  name: string;
  slug: string;
};

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = [
    { id: '1', name: 'T-Shirts', slug: 't-shirts' },
    { id: '2', name: 'Hoodies', slug: 'hoodies' },
    { id: '3', name: 'Outerwear', slug: 'outerwear' },
    { id: '4', name: 'Accessories', slug: 'accessories' },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    return this.categories.find((category) => category.id === id || category.slug === id);
  }
}
