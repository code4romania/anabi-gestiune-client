import { Action } from '@ngrx/store';
import { Asset, Solution } from '../../models';

// load solutions
export const LOAD_SOLUTIONS = '[Solutions] Load Solutions';
export const LOAD_SOLUTIONS_FAIL = '[Solutions] Load Solutions Fail';
export const LOAD_SOLUTIONS_SUCCESS = '[Solutions] Load Solutions Success';

export class LoadSolutions implements Action {
  readonly type: string = LOAD_SOLUTIONS;
  constructor(public payload: Asset) {}
}

export class LoadSolutionsFail implements Action {
  readonly type: string = LOAD_SOLUTIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSolutionsSuccess implements Action {
  readonly type: string = LOAD_SOLUTIONS_SUCCESS;
  constructor(public payload: Solution[]) {}
}

// create solution
export const CREATE_SOLUTION = '[Solutions] Create Solution';
export const CREATE_SOLUTION_FAIL = '[Solutions] Create Solution Fail';
export const CREATE_SOLUTION_SUCCESS = '[Solutions] Create Solution Success';

export class CreateSolution implements Action {
  readonly type: string = CREATE_SOLUTION;
  constructor(public payload: Solution) {}
}

export class CreateSolutionFail implements Action {
  readonly type: string = CREATE_SOLUTION_FAIL;
  constructor(public payload: any) {}
}

export class CreateSolutionSuccess implements Action {
  readonly type: string = CREATE_SOLUTION_SUCCESS;
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
