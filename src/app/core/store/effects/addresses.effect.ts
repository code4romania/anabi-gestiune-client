import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mapTo, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import { Address } from '../../models';
import { AddressesService } from '../../services';
import * as addressActions from '../actions/addresses.action';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as loadingActions from '../actions/loading.action';
import * as assetSelectors from '../selectors/assets.selectors';
import * as countySelectors from '../selectors/counties.selectors';

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
  loadAddress$ = this.actions$
    .pipe(
      ofType(addressActions.AddressActionTypes.LoadAddresses),
      map((action: addressActions.LoadAddresses) => action.payload),
      mergeMap(aAssetId => this.store.pipe(select(assetSelectors.getAssetById(aAssetId)))),
      withLatestFrom(this.store.pipe(select(countySelectors.getCountiesEntities))),
      filter(([aAsset, aCounties]) => aAsset !== undefined && Object.keys(aCounties).length > 0),
      switchMap(([aAsset, aCounties]) => {
        return this.addressesService.getAddress$(aAsset, aCounties).pipe(
          map(aAddress => new addressActions.LoadAddressesSuccess([aAddress])),
          catchError(() => of(new addressActions.LoadAddressesFail(aAsset.id)))
        );
      })
    );

  @Effect()
  showLoading$ = this.actions$
    .pipe(
      ofType(addressActions.AddressActionTypes.LoadAddresses),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        addressActions.AddressActionTypes.LoadAddressesFail,
        addressActions.AddressActionTypes.LoadAddressesSuccess
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(
    private actions$: Actions,
    private addressesService: AddressesService,
    private store: Store<AssetState>
  ) {
  }
}
