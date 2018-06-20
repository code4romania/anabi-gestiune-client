import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLoading from '../reducers/loading.reducer';

export const getLoadingState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.loading
);

export const getIsLoading = createSelector(getLoadingState, fromLoading.getIsLoading);
