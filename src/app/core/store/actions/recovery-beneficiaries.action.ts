import { Action } from '@ngrx/store';
import { RecoveryBeneficiary } from '../../models';

// load recovery beneficiaries
export const LOAD_RECOVERY_BENEFICIARIES = '[Recovery Beneficiaries] Load Recovery Beneficiaries';
export const LOAD_RECOVERY_BENEFICIARIES_FAIL = '[Recovery Beneficiaries] Load Recovery Beneficiaries Fail';
export const LOAD_RECOVERY_BENEFICIARIES_SUCCESS = '[Recovery Beneficiaries] Load Recovery Beneficiaries Success';

export class LoadRecoveryBeneficiaries implements Action {
  readonly type: string = LOAD_RECOVERY_BENEFICIARIES;
  constructor(public payload?: any) {}
}

export class LoadRecoveryBeneficiariesFail implements Action {
  readonly type: string = LOAD_RECOVERY_BENEFICIARIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadRecoveryBeneficiariesSuccess implements Action {
  readonly type: string = LOAD_RECOVERY_BENEFICIARIES_SUCCESS;
  constructor(public payload: RecoveryBeneficiary[]) {}
}

// action types
export type RecoveryBeneficiariesAction = LoadRecoveryBeneficiaries | LoadRecoveryBeneficiariesFail | LoadRecoveryBeneficiariesSuccess;
