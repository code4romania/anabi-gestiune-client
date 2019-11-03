import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OwnersApiService } from '../http';
import { Asset, Owner, OwnerRequest, OwnerResponse } from '../models';

@Injectable()
export class OwnersService {
  constructor(private apiService: OwnersApiService) {}

  public createOwner$(owner: Owner): Observable<Owner> {
    return this.apiService
      .createOwner$(owner.getAssetId(), this.toRequest(owner))
      .pipe(
        map((newOwner: OwnerResponse) =>
          this.handleResponse(newOwner, owner.getAsset())
        )
      )
  }

  private handleResponse(response: OwnerResponse, asset: Asset) {
    const theOwner = new Owner(response);
    theOwner.setAsset(asset)
    return theOwner;
  }

  private toRequest(owner: Owner): OwnerRequest {
    return {
      id: owner.getId(),
      idNumber: owner.idNumber,
      idSerie: owner.idSerie,
      identification: owner.identification,
      isPerson: owner.isPerson,
      name: owner.name,
      birthdate: owner.birthdate && owner.birthdate.isValid()
        ? owner.birthdate.format()
        : undefined,
      firstName: owner.firstName,
      identifierId: owner.identifierId,
      nationality: owner.nationality,
    }
  }
}
