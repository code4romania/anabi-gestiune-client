import { Action } from '@ngrx/store';
import { Identifier } from '../../models';

export enum IdentifiersActionTypes {
  LoadIdentifiers = '[Identifiers] Load Identifiers',
  LoadIdentifiersFail = '[Identifiers] Load Identifiers Fail',
  LoadIdentifiersSuccess = '[Identifiers] Load Identifiers Success',
}

// load identifiers
export class LoadIdentifiers implements Action {
  readonly type: string = IdentifiersActionTypes.LoadIdentifiers;
  constructor(public payload?: any) {}
}

export class LoadIdentifiersFail implements Action {
  readonly type: string = IdentifiersActionTypes.LoadIdentifiersFail;
  constructor(public payload: any) {}
}

export class LoadIdentifiersSuccess implements Action {
  readonly type: string = IdentifiersActionTypes.LoadIdentifiersSuccess;
  constructor(public payload: Identifier[]) {}
}

// action types
export type IdentifiersAction = LoadIdentifiers | LoadIdentifiersFail | LoadIdentifiersSuccess;
