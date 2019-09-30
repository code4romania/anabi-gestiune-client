import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { DefendantsApiService } from '../http';
import { Asset, Defendant, DefendantRequest, DefendantResponse } from '../models';

@Injectable()
export class DefendantsService {
  constructor(private defendantsApiService: DefendantsApiService) {
  }

  private handleResponse(response: DefendantResponse, asset: Asset) {
    const theDefendant = new Defendant(response);
    theDefendant.setAsset(asset);
    return theDefendant
  }

  public createDefendant$(aDefendant: Defendant): Observable<Defendant> {
    return this.defendantsApiService.createDefendant$(aDefendant.getAsset().id, this.toRequest(aDefendant))
      .pipe(
        map((aNewDefendant: DefendantResponse) =>
          this.handleResponse(aNewDefendant, aDefendant.getAsset())
        )
      );
  }

  public getDefendants$(aAsset: Asset): Observable<Defendant[]> {
    return this.defendantsApiService.getDefendants$(aAsset.id)
      .pipe(
        mergeMap(aDefendants => aDefendants),
        map((aNewDefendant: DefendantResponse) =>
          this.handleResponse(aNewDefendant, aAsset)
        ),
        toArray()
      )
  }

  public deleteDefendant$(assetId: number, defendantId: number): Observable<any> {
    return this.defendantsApiService.deleteDefendant(assetId, defendantId);
  }

  public updateDefendant$(assetId: number, aDefendant: Defendant) {
    return this.defendantsApiService.updateDefendant(assetId, this.toRequest(aDefendant))
      .pipe(
        map((response: DefendantResponse) =>
          this.handleResponse(response, aDefendant.getAsset())
        )
      )
  }

  private toRequest(aDefendant: Defendant): DefendantRequest {
    return {
      id: aDefendant.id,
      idNumber: aDefendant.idNumber,
      idSerie: aDefendant.idSerie,
      identification: aDefendant.identification,
      isPerson: aDefendant.isPerson,
      name: aDefendant.name,
      birthdate: aDefendant.birthdate && aDefendant.birthdate.isValid() ? aDefendant.birthdate.format() : undefined,
      firstName: aDefendant.firstName,
      identifierId: aDefendant.identifierId,
      nationality: aDefendant.nationality,
    };
  }
}
