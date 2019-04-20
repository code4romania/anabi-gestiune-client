import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { DefendantsApiService } from '../http';
import { Asset, Defendant, DefendantResponse } from '../models';

@Injectable()
export class DefendantsService {
  constructor(private defendantsApiService: DefendantsApiService) {
  }

  public createDefendant$(aDefendant: Defendant): Observable<Defendant> {
    return this.defendantsApiService.createDefendant$(aDefendant.getAsset().id, aDefendant.toJson())
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

  public deleteDefendant$(assetId: number, defendantId: number): Observable<any> {
    return this.defendantsApiService.deleteDefendant(assetId, defendantId);
  }
}
