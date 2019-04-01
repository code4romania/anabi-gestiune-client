import { Action } from '@ngrx/store';
import { Identifier } from '../../models';

// load identifiers
export const LOAD_IDENTIFIERS = '[Identifiers] Load Identifiers';
export const LOAD_IDENTIFIERS_FAIL = '[Identifiers] Load Identifiers Fail';
export const LOAD_IDENTIFIERS_SUCCESS = '[Identifiers] Load Identifiers Success';

export class LoadIdentifiers implements Action {
  readonly type: string = LOAD_IDENTIFIERS;
  constructor(public payload?: any) {}
}

export class LoadIdentifiersFail implements Action {
  readonly type: string = LOAD_IDENTIFIERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadIdentifiersSuccess implements Action {
  readonly type: string = LOAD_IDENTIFIERS_SUCCESS;
  constructor(public payload: Identifier[]) {}
}

// action types
export type IdentifiersAction = LoadIdentifiers | LoadIdentifiersFail | LoadIdentifiersSuccess;
