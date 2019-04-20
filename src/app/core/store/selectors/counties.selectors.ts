import { createSelector } from '@ngrx/store';
import { County } from '../../models';

import * as fromFeature from '../reducers';
import * as fromCounties from '../reducers/counties.reducer';

export const getCountyState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.counties
);

const getCountiesEntitiesAsInterfaces = createSelector(getCountyState, fromCounties.getCountiesEntities);
export const getCountiesEntities = createSelector(
  getCountiesEntitiesAsInterfaces,
  (aCounties) => {
    const theCounties: { [id: number]: County } = {};
    const theInterfaces = Object.assign({}, aCounties);
    Object.keys(theInterfaces).map((aKey) => {
      theCounties[aKey] = new County(theInterfaces[aKey]);
    });

    return theCounties;
  }
);

export const getAllCounties = createSelector(getCountiesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getCountiesLoaded = createSelector(getCountyState, fromCounties.getCountiesLoaded);
export const getCountiesLoading = createSelector(getCountyState, fromCounties.getCountiesLoading);
