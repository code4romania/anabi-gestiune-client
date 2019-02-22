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
      ofType(decisionActions.LOAD_DECISIONS),
      switchMap(() => {
        return this.decisionsService
          .list()
          .pipe(
            map(aDecisions => new decisionActions.LoadDecisionsSuccess(aDecisions)),
            catchError(error => of(new decisionActions.LoadDecisionsFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private decisionsService: DecisionsService
  ) {
  }
}
