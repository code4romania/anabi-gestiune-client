import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IdentifiersService } from '../../services';
import * as identifierActions from '../actions/identifiers.action';

@Injectable()
export class IdentifiersEffects {

  @Effect()
  loadIdentifiers$ = this.actions$
    .pipe(
      ofType(identifierActions.LOAD_IDENTIFIERS),
      switchMap(() => {
        return this.identifiersService.getAllIdentifiers$()
          .pipe(
            map(aIdentifiers => new identifierActions.LoadIdentifiersSuccess(aIdentifiers)),
            catchError(error => of(new identifierActions.LoadIdentifiersFail(error)))
          )
      })
    );

  constructor(
    private actions$: Actions,
    private identifiersService: IdentifiersService
  ) {
  }
}
