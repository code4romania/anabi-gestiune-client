import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PrecautionaryMeasuresService } from '../../services';
import * as precautionaryMeasureActions from '../actions/precautionary-measures.action';

@Injectable()
export class PrecautionaryMeasuresEffects {

  @Effect()
  loadMeasures$ = this.actions$
    .pipe(
      ofType(precautionaryMeasureActions.LOAD_PRECAUTIONARY_MEASURES),
      switchMap(() => {
        return this.precautionaryMeasuresService
          .list()
          .pipe(
            map(aMeasures => new precautionaryMeasureActions.LoadPrecautionaryMeasuresSuccess(aMeasures)),
            catchError(error => of(new precautionaryMeasureActions.LoadPrecautionaryMeasuresFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private precautionaryMeasuresService: PrecautionaryMeasuresService
  ) {
  }
}
