import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

import { InstitutionsService } from '../../services';
import * as institutionActions from '../actions/institutions.action';
import * as loadingActions from '../actions/loading.action';

@Injectable()
export class InstitutionsEffects {

  @Effect()
  loadInstitutions$ = this.actions$
    .ofType(institutionActions.LOAD_INSTITUTIONS)
    .pipe(
      switchMap(() => {
        return this.institutionsService
          .list()
          .pipe(
            map(aInstitutions => new institutionActions.LoadInstitutionsSuccess(aInstitutions)),
            catchError(error => of(new institutionActions.LoadInstitutionsFail(error)))
          )
      })
    );

  @Effect()
  showLoading$ = this.actions$
    .ofType(institutionActions.LOAD_INSTITUTIONS)
    .pipe(
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .ofType(
      institutionActions.LOAD_INSTITUTIONS_FAIL,
      institutionActions.LOAD_INSTITUTIONS_SUCCESS
    )
    .pipe(
      mapTo(new loadingActions.HideLoading())
    );

  constructor(private actions$: Actions,
              private institutionsService: InstitutionsService
  ) {
  }
}
