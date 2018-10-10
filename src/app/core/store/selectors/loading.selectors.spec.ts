import { CoreState, State } from '../reducers/index';
import { LoadingState } from '../reducers/loading.reducer';
import * as fromSelectors from './loading.selectors';

describe('Loading Selectors', () => {
  let state: State;
  let coreState: CoreState;

  beforeEach(() => {
    state = {
      core: {
        loading: {
          ttl: 0,
        } as LoadingState,
      } as CoreState,
    } as State;

    coreState = state.core;
  });

  describe('getLoadingState', () => {
    it('should get the Loading state', () => {
      expect(fromSelectors.getLoadingState(state)).toEqual(coreState.loading);
    });
  });

  describe('getIsLoading', () => {
    it('should get the loading status as false', () => {
      expect(fromSelectors.getIsLoading(state)).toEqual(false);
    });

    it('should get the loading status as true', () => {
      const theState = {
        ...state,
        core: {
          loading: {
            ttl: 1,
          },
        },
      };
      expect(fromSelectors.getIsLoading(theState)).toEqual(true);
    });
  });
});
