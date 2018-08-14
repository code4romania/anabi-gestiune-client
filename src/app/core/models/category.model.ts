import { CategoryResponse } from './category-response.interface';

export enum CategoryEntity {
  Asset = 'bun',
}

export class Category {
  id: number;
  name: string;
  description: string;
  parentId: number;
  parent: Category;
  forEntity: CategoryEntity;

  constructor(aCategory?: CategoryResponse) {
    if (aCategory) {
      this.fromJson(aCategory);
    }
  }

  fromJson(aCategoryResponse: CategoryResponse) {
    this.id = aCategoryResponse.id;
    this.name = aCategoryResponse.code;
    this.description = aCategoryResponse.description;
    this.parentId = aCategoryResponse.parentId;
    this.forEntity = aCategoryResponse.forEntity as CategoryEntity || undefined;
  }

  setParent(aParent: Category) {
    this.parent = aParent;
  }

  isAssetEntity(): boolean {
    return this.forEntity === CategoryEntity.Asset;
  }
}
