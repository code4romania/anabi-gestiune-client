import { createSelector } from '@ngrx/store';

import { Identifier } from '@app/core/models/identifier';
import * as fromFeature from '../reducers';
import * as fromIdentifiers from '../reducers/identifiers.reducer';

export const getIdentifiersState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.identifiers
);

const getIdentifiersEntitiesAsInterface = createSelector(getIdentifiersState, fromIdentifiers.getIdentifierEntities);

export const getIdentifiersEntities = createSelector(
  getIdentifiersEntitiesAsInterface,
  (aEntities) => {
    const theIdentifiers = Object.assign({}, aEntities);

    Object.keys(theIdentifiers).map((aKey) => {
      theIdentifiers[aKey] = new Identifier(theIdentifiers[aKey]);
    });

    return theIdentifiers;
  }
);

export const getAllIdentifiers = createSelector(
  getIdentifiersEntities,
  (entities: Identifier[]) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getIdentifiersLoaded = createSelector(getIdentifiersState, fromIdentifiers.getIdentifierLoaded);
export const getIdentifiersLoading = createSelector(getIdentifiersState, fromIdentifiers.getIdentifierLoading);
