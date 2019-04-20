import { Solution } from '../../models';
import { CoreState, State } from '../reducers/index';
import { SolutionState } from '../reducers/solutions.reducer';
import * as fromSelectors from './solutions.selectors';

import { solutions as mockSolutions } from '../../models/mock-data';

describe('Solution Selectors', () => {
  let state: State;
  let coreState: CoreState;

  const theSolutions = mockSolutions;

  const getEntitiesAsArray = (aState: State) => {
    return Object.keys(aState.core.solutions.entities).map(id => aState.core.solutions.entities[id]);
  };

  const getEntitiesAsObjects = (aState: State) => {
    const theResult: { [id: number]: Solution } = {};
    Object.keys(aState.core.solutions.entities).forEach(id => {
      theResult[id] = new Solution(aState.core.solutions.entities[id]);
    });

    return theResult;
  };

  const getEntitiesAsArrayOfObjects = (aState: State) => {
    return Object.keys(aState.core.solutions.entities).map(id => new Solution(aState.core.solutions.entities[id]));
  };

  beforeEach(() => {
    state = {
      core: {
        solutions: {
          entities: {
            1: theSolutions[0].toJson(),
            2: theSolutions[1].toJson(),
          },
          loaded: true,
          loading: false,
        } as SolutionState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getSolutionState', () => {
    it('should get the Solution state', () => {
      expect(fromSelectors.getSolutionState(state)).toEqual(coreState.solutions);
    });
  });

  describe('getSolutionEntities', () => {
    it('should get the entities', () => {
      expect(fromSelectors.getSolutionEntities(state)).toEqual(getEntitiesAsObjects(state));
    });
  });

  describe('getAllSolutions', () => {
    it('should get the solutions', () => {
      const expectedResult = getEntitiesAsArrayOfObjects(state);
      expect(fromSelectors.getAllSolutions(state)).toEqual(expectedResult);
    });
  });

  describe('getSolutionsLoaded', () => {
    it('should get the loaded status', () => {
      expect(fromSelectors.getSolutionsLoaded(state)).toEqual(coreState.solutions.loaded);
    });
  });

  describe('getSolutionsLoading', () => {
    it('should get the loading status', () => {
      expect(fromSelectors.getSolutionsLoading(state)).toEqual(coreState.solutions.loading);
    });
  });

  describe('getSolutionById', () => {
    it('should get a Solution by id', () => {
      expect(fromSelectors.getSolutionById(1)(state)).toEqual(new Solution(coreState.solutions.entities[1]));
    });

    it('should return undefined if the id is not found', () => {
      expect(fromSelectors.getSolutionById(99)(state)).toEqual(undefined);
    });
  });

  describe('getSolutionsByAssetId', () => {
    it('should get a Solution by its Asset id', () => {
      expect(fromSelectors.getSolutionsByAssetId(1)(state)).toEqual([ new Solution(coreState.solutions.entities[1]) ]);
    });

    it('should return an empty array if the asset id is not found', () => {
      expect(fromSelectors.getSolutionsByAssetId(99)(state)).toEqual([]);
    });
  });
});
