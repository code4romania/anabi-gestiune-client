import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { Address, AssetProperty, AssetPropertyType, Defendant, Owner, Solution, StorageSpace } from '@app/core/models';
import * as addressActions from '../actions/addresses.action';
import * as assetPropertyActions from '../actions/asset-properties.action';
import * as defendantActions from '../actions/defendants.action';
import * as ownerActions from '../actions/owner.action';
import * as solutionActions from '../actions/solutions.action';
import * as storageSpaceActions from '../actions/storage-spaces.action';

@Injectable()
export class AssetPropertiesEffects {

  @Effect()
  createProperty$ = this.actions$
    .pipe(
      ofType(assetPropertyActions.AssetPropertyActionTypes.CreateProperty),
      map((action: assetPropertyActions.CreateProperty) => action.payload),
      map((aPayload: AssetProperty) => {
        if (!aPayload) {
          return;
        }

        switch (aPayload.getAssetPropertyType()) {
          case AssetPropertyType.Solution:
            return new solutionActions.CreateSolution(aPayload as Solution);

          case AssetPropertyType.StorageSpace:
            return new storageSpaceActions.CreateStorageSpace(aPayload as StorageSpace);

          case AssetPropertyType.Address:
            return new addressActions.CreateAddress(aPayload as Address);

          case AssetPropertyType.Defendant: {
            return new defendantActions.CreateDefendant(aPayload as Defendant);
          }

          case AssetPropertyType.Owner: {
            return new ownerActions.CreateOwner(aPayload as Owner);
          }

          default:
            return;
        }
      })
    );

  @Effect()
  persistProperty$ = this.actions$
      .pipe(
        ofType(assetPropertyActions.AssetPropertyActionTypes.PersistProperty),
        map(({ payload }: assetPropertyActions.PersistProperty) => {

          if (!payload) {
            return;
          }

          if (payload.isDefendant()) {
            return new defendantActions.UpdateDefendant(payload);
          }

          if (payload.isOwner()) {
            return new ownerActions.UpdateOwner(payload);
          }

          return;
        })
      )

  constructor(private actions$: Actions) {
  }
}
