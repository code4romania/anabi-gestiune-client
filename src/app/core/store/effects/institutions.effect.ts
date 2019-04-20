import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

import { InstitutionsService } from '../../services';
import * as institutionActions from '../actions/institutions.action';
import * as loadingActions from '../actions/loading.action';

@Injectable()
export class InstitutionsEffects {

  @Effect()
  loadInstitutions$ = this.actions$
    .pipe(
      ofType(institutionActions.InstitutionsActionTypes.LoadInstitutions),
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
    .pipe(
      ofType(institutionActions.InstitutionsActionTypes.LoadInstitutions),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        institutionActions.InstitutionsActionTypes.LoadInstitutionsFail,
        institutionActions.InstitutionsActionTypes.LoadInstitutionsSuccess
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(
    private actions$: Actions,
    private institutionsService: InstitutionsService
  ) {
  }
}
