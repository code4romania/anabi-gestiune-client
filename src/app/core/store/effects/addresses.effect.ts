import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';

import { Address } from '../../models';
import { AddressesService } from '../../services';
import * as addressActions from '../actions/addresses.action';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as assetSelectors from '../selectors/assets.selectors';

import { select, Store } from '@ngrx/store';
import { AssetState } from '../reducers';

@Injectable()
export class AddressesEffect {

  @Effect()
  createAddress$ = this.actions$
    .pipe(
      ofType(addressActions.AddressActionTypes.CreateAddress),
      map((action: addressActions.CreateAddress) => action.payload),
      switchMap(aPayload => {
        return this.addressesService.createAddress(aPayload).pipe(
          map(aAddress => new addressActions.CreateAddressSuccess(aAddress)),
          catchError(error => of(new addressActions.CreateAddressFail(error)))
        );
      })
    );

  @Effect()
  createAddressSuccess$ = this.actions$
    .pipe(
      ofType(addressActions.AddressActionTypes.CreateAddressSuccess),
      map((action: addressActions.CreateAddressSuccess) => action.payload),
      map((aAddress: Address) => new assetPropertiesActions.DeleteProperty(aAddress.getAsset().id))
    );

  @Effect()
  loadAddresses$ = this.actions$
    .pipe(
      ofType(addressActions.AddressActionTypes.LoadAddresses),
      map((action: addressActions.LoadAddresses) => action.payload),
      mergeMap(aAssetId => this.store.pipe(select(assetSelectors.getAssetById(aAssetId)))),
      filter(aAsset => aAsset !== undefined),
      switchMap((aAsset) => {
        return this.addressesService.getAddresses$(aAsset).pipe(
          map(aAddresses => new addressActions.LoadAddressesSuccess(aAddresses)),
          catchError(() => of(new addressActions.LoadAddressesFail(aAsset.id)))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private addressesService: AddressesService,
    private store: Store<AssetState>
  ) {
  }
}
