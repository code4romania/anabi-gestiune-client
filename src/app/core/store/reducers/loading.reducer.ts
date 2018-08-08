import * as fromLoading from '../actions/loading.action';

export interface LoadingState {
  ttl: number;
}

export const initialState: LoadingState = {
  ttl: 0,
};

export function reducer(
  state = initialState,
  action: fromLoading.LoadingAction
): LoadingState {

  switch (action.type) {
    case fromLoading.SHOW_LOADING: {
      const ttl = state.ttl + 1;
      return {
        ...state,
        ttl,
      };
    }

    case fromLoading.HIDE_LOADING: {
      const ttl = state.ttl > 0 ? state.ttl - 1 : 0;
      return {
        ...state,
        ttl,
      };
    }

    default: {
      return {
        ...state,
      } as LoadingState;
    }
  }
}

export const getIsLoading = (state: LoadingState) => state.ttl > 0;
