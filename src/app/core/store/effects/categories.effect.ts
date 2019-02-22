import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CategoriesService } from '../../services';
import * as categoryActions from '../actions/categories.action';

@Injectable()
export class CategoriesEffects {

  @Effect()
  loadCategories$ = this.actions$
    .pipe(
      ofType(categoryActions.LOAD_CATEGORIES),
      switchMap(() => {
        return this.categoriesService
          .list()
          .pipe(
            map(aCategories => new categoryActions.LoadCategoriesSuccess(aCategories)),
            catchError(error => of(new categoryActions.LoadCategoriesFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private categoriesService: CategoriesService
  ) {
  }
}
