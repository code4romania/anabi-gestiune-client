import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { DecisionsService } from '../../services';
import * as decisionActions from '../actions/decisions.action';

@Injectable()
export class DecisionsEffects {

  @Effect()
  loadDecisions$ = this.actions$
    .pipe(
      ofType(decisionActions.DecisionsActionTypes.LoadDecisions),
      switchMap(() => {
        return this.decisionsService
          .list()
          .pipe(
            map(aDecisions => new decisionActions.LoadDecisionsSuccess(aDecisions)),
            catchError(error => of(new decisionActions.LoadDecisionsFail(error)))
          )
      })
    );

  @Effect()
  loadDecisionsSearch$ = this.actions$
    .pipe(
      ofType(decisionActions.DecisionsActionTypes.LoadSearchDecisions),
      map((action: decisionActions.LoadSearchDecisions) => action.payload),
      switchMap((aPayload) => {
        return this.decisionsService
          .search(aPayload)
          .pipe(
            map(aDecisions => new decisionActions.LoadSearchDecisionsSuccess(aDecisions)),
            catchError(error => of(new decisionActions.LoadSearchDecisionsFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private decisionsService: DecisionsService
  ) {
  }
}
