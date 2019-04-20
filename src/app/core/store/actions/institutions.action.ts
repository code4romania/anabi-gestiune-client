import { Action } from '@ngrx/store';
import { Institution } from '../../models';

export enum InstitutionsActionTypes {
  LoadInstitutions = '[Institutions] Load Institutions',
  LoadInstitutionsFail = '[Institutions] Load Institutions Fail',
  LoadInstitutionsSuccess = '[Institutions] Load Institutions Success',
}

// load institutions
export class LoadInstitutions implements Action {
  readonly type: string = InstitutionsActionTypes.LoadInstitutions;
  constructor(public payload?: any) {}
}

export class LoadInstitutionsFail implements Action {
  readonly type: string = InstitutionsActionTypes.LoadInstitutionsFail;
  constructor(public payload: any) {}
}

export class LoadInstitutionsSuccess implements Action {
  readonly type: string = InstitutionsActionTypes.LoadInstitutionsSuccess;
  constructor(public payload: Institution[]) {}
}

// action types
export type InstitutionsAction = LoadInstitutions | LoadInstitutionsFail | LoadInstitutionsSuccess;
