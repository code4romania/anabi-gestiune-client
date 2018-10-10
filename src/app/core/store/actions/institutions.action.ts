import { Action } from '@ngrx/store';
import { Institution } from '../../models';

// load institutions
export const LOAD_INSTITUTIONS = '[Institutions] Load Institutions';
export const LOAD_INSTITUTIONS_FAIL = '[Institutions] Load Institutions Fail';
export const LOAD_INSTITUTIONS_SUCCESS = '[Institutions] Load Institutions Success';

export class LoadInstitutions implements Action {
  readonly type: string = LOAD_INSTITUTIONS;
  constructor(public payload?: any) {}
}

export class LoadInstitutionsFail implements Action {
  readonly type: string = LOAD_INSTITUTIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadInstitutionsSuccess implements Action {
  readonly type: string = LOAD_INSTITUTIONS_SUCCESS;
  constructor(public payload: Institution[]) {}
}

// action types
export type InstitutionsAction = LoadInstitutions | LoadInstitutionsFail | LoadInstitutionsSuccess;
