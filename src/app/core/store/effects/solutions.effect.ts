import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

import { Solution } from '../../models';
import { SolutionsService } from '../../services';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as solutionActions from '../actions/solutions.action';

@Injectable()
export class SolutionsEffects {

  @Effect()
  loadSolutions$ = this.actions$
    .pipe(
      ofType(solutionActions.SolutionActionTypes.LoadSolutions),
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

  @Effect()
  createSolution$ = this.actions$
    .pipe(
      ofType(solutionActions.SolutionActionTypes.CreateSolution),
      map((action: solutionActions.CreateSolution) => action.payload),
      switchMap((aPayload) => {
        return this.solutionsService
          .createSolution(aPayload)
          .pipe(
            map(aSolution => new solutionActions.CreateSolutionSuccess(aSolution)),
            catchError(error => of(new solutionActions.CreateSolutionFail(error)))
          )
      })
    );

  @Effect()
  createSolutionSuccess$ = this.actions$
    .pipe(
      ofType(solutionActions.SolutionActionTypes.CreateSolutionSuccess),
      map((action: solutionActions.CreateSolutionSuccess) => action.payload),
      mapTo((aSolution: Solution) => new assetPropertiesActions.DeleteProperty(aSolution.getAsset().id))
    );

  constructor(private actions$: Actions,
              private solutionsService: SolutionsService
  ) {
  }
}
