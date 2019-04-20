import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CountiesService } from '../../services';
import * as countyActions from '../actions/counties.action';

@Injectable()
export class CountiesEffects {

  @Effect()
  loadCounties$ = this.actions$
    .pipe(
      ofType(countyActions.CountyActionTypes.LoadCounties),
      switchMap(() => {
        return this.countiesService.list$()
          .pipe(
            map(aCounties => new countyActions.LoadCountiesSuccess(aCounties)),
            catchError(error => of(new countyActions.LoadCountiesFail(error)))
          )
      })
    );

  constructor(
    private actions$: Actions,
    private countiesService: CountiesService
  ) {
  }
}
