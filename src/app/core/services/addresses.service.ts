import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { AddressesApiService } from '../http';
import { Address, AddressResponse, Asset } from '../models';

@Injectable()
export class AddressesService {
  constructor(private addressesApiService: AddressesApiService) {
  }

  public createAddress(aAddress: Address): Observable<Address> {
    return this.addressesApiService.createAddress(aAddress.getAssetId(), aAddress.toRequest())
      .pipe(
        map((aNewAddress: AddressResponse) => {
          const theAddress = new Address();
          theAddress.fromResponse(aNewAddress);
          theAddress.setAsset(aAddress.getAsset());
          theAddress.setCounty(aAddress.county);
          return theAddress;
        })
      );
  }

  public getAddresses$(aAsset: Asset): Observable<Address[]> {
    return this.addressesApiService.getAddresses$(aAsset.id)
      .pipe(
        mergeMap(aAddresses => aAddresses),
        map((aNewAddress: AddressResponse) => {
          const theAddress = new Address();
          theAddress.fromResponse(aNewAddress);
          theAddress.setAsset(aAsset);
          return theAddress;
        }),
        toArray()
      )
  }
}
