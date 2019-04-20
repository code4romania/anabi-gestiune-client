import { CategoryResponse } from './category-response.interface';

export enum CategoryEntity {
  Asset = 'bun',
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  parentId: number;
  parent: ICategory;
  forEntity: string;
}

export class Category {
  id: number;
  name: string;
  description: string;
  parentId: number;
  parent: Category;
  forEntity: CategoryEntity;

  constructor(aCategory?: ICategory) {
    if (aCategory) {
      this.fromJson(aCategory);
    }
  }

  fromResponse(aCategoryResponse: CategoryResponse) {
    this.id = aCategoryResponse.id;
    this.name = aCategoryResponse.code;
    this.description = aCategoryResponse.description;
    this.parentId = aCategoryResponse.parentId || null;
    this.parent = aCategoryResponse.parent || undefined;
    this.forEntity = aCategoryResponse.forEntity ? aCategoryResponse.forEntity as CategoryEntity : undefined;
  }

  fromJson(aCategory: ICategory) {
    this.id = aCategory.id;
    this.name = aCategory.name;
    this.description = aCategory.description;
    this.parentId = aCategory.parentId || null;
    this.forEntity = aCategory.forEntity as CategoryEntity || undefined;

    if (aCategory.parent) {
      this.setParent(new Category(aCategory.parent));
    }
  }

  toJson(): ICategory {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      parentId: this.parentId,
      parent: this.parent ? this.parent.toJson() : undefined,
      forEntity: this.forEntity ? this.forEntity.toString() : undefined,
    };
  }

  setParent(aParent: Category) {
    this.parent = aParent;
  }

  isAssetEntity(): boolean {
    return this.forEntity === CategoryEntity.Asset;
  }
}
