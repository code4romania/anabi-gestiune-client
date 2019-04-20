import { Action } from '@ngrx/store';
import { RecoveryBeneficiary } from '../../models';

export enum RecoveryBeneficiaryActionTypes {
  LoadRecoveryBeneficiaries = '[Recovery Beneficiaries] Load Recovery Beneficiaries',
  LoadRecoveryBeneficiariesFail = '[Recovery Beneficiaries] Load Recovery Beneficiaries Fail',
  LoadRecoveryBeneficiariesSuccess = '[Recovery Beneficiaries] Load Recovery Beneficiaries Success',
}

// load recovery beneficiaries
export class LoadRecoveryBeneficiaries implements Action {
  readonly type: string = RecoveryBeneficiaryActionTypes.LoadRecoveryBeneficiaries;
  constructor(public payload?: any) {}
}

export class LoadRecoveryBeneficiariesFail implements Action {
  readonly type: string = RecoveryBeneficiaryActionTypes.LoadRecoveryBeneficiariesFail;
  constructor(public payload: any) {}
}

export class LoadRecoveryBeneficiariesSuccess implements Action {
  readonly type: string = RecoveryBeneficiaryActionTypes.LoadRecoveryBeneficiariesSuccess;
  constructor(public payload: RecoveryBeneficiary[]) {}
}

// action types
export type RecoveryBeneficiariesAction = LoadRecoveryBeneficiaries | LoadRecoveryBeneficiariesFail | LoadRecoveryBeneficiariesSuccess;
