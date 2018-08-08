import * as fromLoading from '../actions/loading.action';
import { initialState, reducer, LoadingState } from './loading.reducer';

describe('Loading Reducer', () => {
  it('should return current state when no valid action', () => {
    const expectedState = reducer(initialState, { type: 'INVALID_ACTION'} as fromLoading.LoadingAction);
    expect(expectedState).toEqual(initialState);
  });

  it('should increase the loading TTL on SHOW_LOADING', () => {
    console.log('initial state', initialState);
    const expectedState = {
      ...initialState,
      ttl: 1,
    } as LoadingState;
    const actualState = reducer(initialState, new fromLoading.ShowLoading());
    expect(actualState).toEqual(expectedState);
  });

  it('should decrease the loading TTL on HIDE_LOADING', () => {
    const theInitialState = {
      ...initialState,
      ttl: 3,
    } as LoadingState;

    const expectedState = {
      ...initialState,
      ttl: 2,
    } as LoadingState;
    const actualState = reducer(theInitialState, new fromLoading.HideLoading());
    expect(actualState).toEqual(expectedState);
  });
});
