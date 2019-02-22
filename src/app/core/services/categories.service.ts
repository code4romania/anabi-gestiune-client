import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CategoriesApiService } from '../http';
import { Category, CategoryResponse } from '../models';

@Injectable()
export class CategoriesService {
  constructor(private categoriesApiService: CategoriesApiService) {
  }

  public list(): Observable<Category[]> {
    return this.categoriesApiService.list()
      .pipe(
        map((aResponse: object[]) => aResponse.map((aCategory: CategoryResponse) => new Category(aCategory))),
        map((aCategories: Category[]) => {
          return aCategories.map((aCategory: Category) => {
            aCategory.setParent(this.findParent(aCategories, aCategory));
            return aCategory;
          });
        })
      );
  }

  private findParent(aCategoryList: Category[], aCategory: Category): Category {
    return aCategoryList.find(c => c.id === aCategory.parentId);
  }
}
