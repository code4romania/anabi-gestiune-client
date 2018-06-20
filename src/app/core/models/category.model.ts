import { CategoryResponse } from './category-response.interface';

export class Category {
  id: number;
  name: string;
  description: string;
  parentId: number;
  parent: Category;
  forEntity: string;

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
    this.forEntity = aCategoryResponse.forEntity || undefined;
  }

  setParent(aParent: Category) {
    this.parent = aParent;
  }
}
