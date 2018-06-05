import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, take, toArray } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { CoreState } from '../store/reducers/index';
import * as fromSelectors from '../store/selectors';

import { AssetsApiService } from '../http';
import { Asset, AssetResponse, Category, Stage } from '../models';

@Injectable()
export class AssetsService {
  constructor(
    private assetsApiService: AssetsApiService,
    private store: Store<CoreState>) {
  }

  public list(): Observable<Asset[]> {
    return this.assetsApiService.list()
      .pipe(
        mergeMap(a => a),
        mergeMap((aAssetResponse: AssetResponse) => this.assetFromResponse(aAssetResponse)),
        toArray()
      );
  }

  public stages(): Observable<Stage[]> {
    return this.assetsApiService.stages()
      .pipe(
        map((aResponse: object[]) => aResponse.map(aStage => new Stage(aStage)))
      );
  }

  private assetFromResponse(aResponse: AssetResponse): Observable<Asset> {
    return Observable.zip(
      this.store.select(fromSelectors.getCategoryByName(aResponse.assetCategory)),
      this.store.select(fromSelectors.getCategoryByName(aResponse.assetSubcategory)),
      this.store.select(fromSelectors.getStageByName(aResponse.currentStage)),
      (aCategory: Category, aSubcategory: Category, aStage: Stage) => {
        const theAsset = new Asset();
        theAsset.fromJson(aResponse);
        theAsset.setCategory(aCategory);
        theAsset.setSubcategory(aSubcategory);
        theAsset.setStage(aStage);

        return theAsset;
      }
    ).pipe(
      take(1)
    );
  }
}
