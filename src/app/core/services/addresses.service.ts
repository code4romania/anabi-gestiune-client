import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { AddressesApiService } from '../http';
import { Address, AddressResponse, Asset, County } from '../models';

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

  public getAddress$(aAsset: Asset, aCounties: { [id: number]: County }): Observable<Address> {
    return this.addressesApiService.getAddress$(aAsset.id)
      .pipe(
        map((aNewAddress: AddressResponse) => {
          const theAddress = new Address();
          theAddress.fromResponse(aNewAddress);
          theAddress.setAsset(aAsset);
          theAddress.setCounty(aCounties[aNewAddress.countyId]);
          return theAddress;
        })
      )
  }
}
