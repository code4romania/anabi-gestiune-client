import { Solution } from '../../models';
import * as fromSolutions from '../actions/solutions.action';
import { initialState, reducer } from './solutions.reducer';

import { assets as mockAssets, solutions as mockSolutions } from '../../models/mock-data';

describe('Solutions Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION' } as fromSolutions.SolutionsAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should set loading to true on LOAD_SOLUTIONS', () => {
    const expectedState = {
      ...initialState,
      loading: true,
    };

    const actualState = reducer(initialState, new fromSolutions.LoadSolutions(mockAssets[0]));
    expect(actualState).toEqual(expectedState);
  });

  it('should set the entities correctly on LOAD_SOLUTIONS_SUCCESS', () => {
    const theSolutions = [mockSolutions[0], mockSolutions[1]];

    const expectedState = {
      ...initialState,
      entities: {
        1: theSolutions[0],
        2: theSolutions[1],
      },
      loaded: true,
      loading: false,
    };

    const actualState = reducer(initialState, new fromSolutions.LoadSolutionsSuccess(theSolutions));
    expect(actualState).toEqual(expectedState);
  });

  it('should add a new entity on CREATE_SOLUTION_SUCCESS', () => {
    const theSolution = mockSolutions[2];
    const theInitialState = {
      ...initialState,
      entities: {
        1: mockSolutions[0],
        2: mockSolutions[1],
      },
      loaded: true,
      loading: false,
    };

    const expectedState = {
      ...initialState,
      entities: {
        1: mockSolutions[0],
        2: mockSolutions[1],
        3: mockSolutions[2],
      },
      loaded: true,
      loading: false,
    };

    const actualState = reducer(theInitialState, new fromSolutions.CreateSolutionSuccess(theSolution));
    expect(actualState).toEqual(expectedState);
  });
});
