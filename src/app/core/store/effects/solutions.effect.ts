import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { SolutionsService } from '../../services';
import * as solutionActions from '../actions/solutions.action';

@Injectable()
export class SolutionsEffects {

  @Effect()
  loadSolutions$ = this.actions$
    .ofType(solutionActions.LOAD_SOLUTIONS)
    .pipe(
      map((action: solutionActions.LoadSolutions) => action.payload),
      switchMap((aPayload) => {
        return this.solutionsService
          .getSolutions(aPayload)
          .pipe(
            map(aSolutions => new solutionActions.LoadSolutionsSuccess(aSolutions)),
            catchError(error => of(new solutionActions.LoadSolutionsFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private solutionsService: SolutionsService
  ) {
  }
}
