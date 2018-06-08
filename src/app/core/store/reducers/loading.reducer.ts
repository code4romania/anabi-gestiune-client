import * as fromLoading from '../actions/loading.action';

export interface LoadingState {
  isLoading: boolean;
}

export const initialState: LoadingState = {
  isLoading: false,
};

export function reducer(
  state = initialState,
  action: fromLoading.LoadingAction
): LoadingState {

  switch (action.type) {
    case fromLoading.SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case fromLoading.HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return {
        ...state,
      } as LoadingState;
    }
  }
}

export const getIsLoading = (state: LoadingState) => state.isLoading;
