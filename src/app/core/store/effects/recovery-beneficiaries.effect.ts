import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RecoveryBeneficiariesService } from '../../services/recovery-beneficiaries.service';
import * as recoveryBeneficiaryActions from '../actions/recovery-beneficiaries.action';

@Injectable()
export class RecoveryBeneficiariesEffects {
  @Effect()
  loadCategories$ = this.actions$
    .ofType(recoveryBeneficiaryActions.LOAD_RECOVERY_BENEFICIARIES)
    .pipe(
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
