import { Injectable } from '@angular/core';

import { ofType, Actions, Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';

import { Owner } from '../../models';
import { OwnersService } from '../../services';
import { AssetState } from '../reducers';

import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as ownersActions from '../actions/owner.action';
import * as assetSelectors from '../selectors/assets.selectors';

@Injectable()
export class OwnersEffects {

  @Effect()
  createOwner$ = this.actions$
    .pipe(
      ofType(ownersActions.OwnersActionTypes.CreateOwner),
      map((action: ownersActions.CreateOwner) => action.payload),
      switchMap(aPayload => {
        return this.ownersService.createOwner$(aPayload).pipe(
          map(aOwner => new ownersActions.CreateOwnerSuccess(aOwner)),
          catchError(error => of(new ownersActions.CreateOwnerFail(error)))
        );
      })
    );

  @Effect()
  createOwnerSuccess$ = this.actions$
    .pipe(
      ofType(ownersActions.OwnersActionTypes.CreateOwnerSuccess),
      map((action: ownersActions.CreateOwnerSuccess) => action.payload),
      map((aOwner: Owner) => new assetPropertiesActions.DeleteProperty(aOwner.getAsset().id))
    );

  @Effect()
  loadOwners$ = this.actions$
      .pipe(
        ofType(ownersActions.OwnersActionTypes.LoadOwners),
        map((action: ownersActions.LoadOwners) => action.payload),
        mergeMap(assetId =>
          this.store.pipe(select(assetSelectors.getAssetById(assetId)))),
        filter(aAsset => aAsset !== undefined),
        switchMap((aAsset) => {
          return this.ownersService.getOwners$(aAsset).pipe(
            map(owners => new ownersActions.LoadOwnersSuccess({ id: aAsset.id, owners })),
            catchError(() => of(new ownersActions.LoadOwnersFail(aAsset.id)))
          )
        })
      );

  constructor(
    private actions$: Actions,
    private ownersService: OwnersService,
    private store: Store<AssetState>
  ) {
  }
}
