import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { DefendantsApiService } from '../http';
import { Asset, Defendant, DefendantRequest, DefendantResponse } from '../models';

@Injectable()
export class DefendantsService {
  constructor(private defendantsApiService: DefendantsApiService) {
  }

  public createDefendant$(aDefendant: Defendant): Observable<Defendant> {
    return this.defendantsApiService.createDefendant$(aDefendant.getAsset().id, this.toRequest(aDefendant))
      .pipe(
        map((aNewDefendant: DefendantResponse) => {
          const theDefendant = new Defendant(aNewDefendant);
          theDefendant.setAsset(aDefendant.getAsset());
          return theDefendant;
        })
      );
  }

  public getDefendants$(aAsset: Asset): Observable<Defendant[]> {
    return this.defendantsApiService.getDefendants$(aAsset.id)
      .pipe(
        mergeMap(aDefendants => aDefendants),
        map((aNewDefendant: DefendantResponse) => {
          const theDefendant = new Defendant(aNewDefendant);
          theDefendant.setAsset(aAsset);
          return theDefendant;
        }),
        toArray()
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
      birthdate: aDefendant.birthdate.isValid() ? aDefendant.birthdate.format() : undefined,
      firstName: aDefendant.firstName,
      identifierId: aDefendant.identifierId,
      nationality: aDefendant.nationality,
    };
  }
}
