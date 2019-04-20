import { Action } from '@ngrx/store';
import { Asset, Solution } from '../../models';

export enum SolutionActionTypes {
  CreateSolution = '[Solutions] Create Solution',
  CreateSolutionFail = '[Solutions] Create Solution Fail',
  CreateSolutionSuccess = '[Solutions] Create Solution Success',
  LoadSolutions = '[Solutions] Load Solutions',
  LoadSolutionsFail = '[Solutions] Load Solutions Fail',
  LoadSolutionsSuccess = '[Solutions] Load Solutions Success',
}

// load solutions
export class LoadSolutions implements Action {
  readonly type: string = SolutionActionTypes.LoadSolutions;
  constructor(public payload: Asset) {}
}

export class LoadSolutionsFail implements Action {
  readonly type: string = SolutionActionTypes.LoadSolutionsFail;
  constructor(public payload: any) {}
}

export class LoadSolutionsSuccess implements Action {
  readonly type: string = SolutionActionTypes.LoadSolutionsSuccess;
  constructor(public payload: Solution[]) {}
}

// create solution
export class CreateSolution implements Action {
  readonly type: string = SolutionActionTypes.CreateSolution;
  constructor(public payload: Solution) {}
}

export class CreateSolutionFail implements Action {
  readonly type: string = SolutionActionTypes.CreateSolutionFail;
  constructor(public payload: any) {}
}

export class CreateSolutionSuccess implements Action {
  readonly type: string = SolutionActionTypes.CreateSolutionSuccess;
  constructor(public payload: Solution) {}
}

// action types
export type SolutionsAction =
  LoadSolutions
  | LoadSolutionsFail
  | LoadSolutionsSuccess
  | CreateSolution
  | CreateSolutionFail
  | CreateSolutionSuccess;
