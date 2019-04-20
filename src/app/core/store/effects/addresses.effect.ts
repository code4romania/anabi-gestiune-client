import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Address } from '../../models';
import { AssetsService } from '../../services';
import * as addressesActions from '../actions/addresses.action';
import * as assetPropertiesActions from '../actions/asset-properties.action';

@Injectable()
export class AddressesEffect {

  @Effect()
  createAddress$ = this.actions$
    .pipe(
      ofType(addressesActions.AddressActionTypes.CreateAddress),
      map((action: addressesActions.CreateAddress) => action.payload),
      switchMap(aPayload => {
        return this.assetsService.createAddress(aPayload).pipe(
          map(aAddress => new addressesActions.CreateAddressSuccess(aAddress)),
          catchError(error => of(new addressesActions.CreateAddressFail(error)))
        );
      })
    );

  @Effect()
  createAddressSuccess$ = this.actions$
    .pipe(
      ofType(addressesActions.AddressActionTypes.CreateAddressSuccess),
      map((action: addressesActions.CreateAddressSuccess) => action.payload),
      map((aAddress: Address) => new assetPropertiesActions.DeleteProperty(aAddress.getAsset().id))
    );

  constructor(
    private actions$: Actions,
    private assetsService: AssetsService
  ) {
  }
}
