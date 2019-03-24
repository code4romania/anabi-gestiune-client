import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CrimeTypesService } from '../../services';
import * as crimeTypeActions from '../actions/crime-types.action';

@Injectable()
export class CrimeTypesEffects {

  @Effect()
  loadMeasures$ = this.actions$
    .pipe(
      ofType(crimeTypeActions.CRIME_TYPES_LOAD),
      switchMap(() => {
        return this.crimeTypesService
          .list()
          .pipe(
            map(aMeasures => new crimeTypeActions.LoadCrimeTypesSuccess(aMeasures)),
            catchError(error => of(new crimeTypeActions.LoadCrimeTypesFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private crimeTypesService: CrimeTypesService
  ) {
  }
}
