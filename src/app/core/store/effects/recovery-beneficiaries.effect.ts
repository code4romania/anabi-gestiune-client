import { Injectable } from '@angular/core';

import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RecoveryBeneficiariesService } from '../../services';
import * as recoveryBeneficiaryActions from '../actions/recovery-beneficiaries.action';

@Injectable()
export class RecoveryBeneficiariesEffects {
  @Effect()
  loadRecoveryBeneficiaries$ = this.actions$
    .pipe(
      ofType(recoveryBeneficiaryActions.RecoveryBeneficiaryActionTypes.LoadRecoveryBeneficiaries),
      switchMap(() => {
        return this.recoveryBeneficiariesService
          .list()
          .pipe(
            map(aRecoveryBeneficiaries => new recoveryBeneficiaryActions.LoadRecoveryBeneficiariesSuccess(aRecoveryBeneficiaries)),
            catchError(error => of(new recoveryBeneficiaryActions.LoadRecoveryBeneficiariesFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private recoveryBeneficiariesService: RecoveryBeneficiariesService
  ) {
  }
}
