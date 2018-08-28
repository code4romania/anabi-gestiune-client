import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, take, toArray } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { CoreState } from '../store/reducers/index';
import * as fromSelectors from '../store/selectors';

import { AssetsApiService } from '../http';
import {
  Asset,
  AssetCurrency,
  AssetDetailResponse,
  AssetMeasurement,
  AssetResponse,
  Category,
  Stage,
  StageResponse
} from '../models';

@Injectable()
export class AssetsService {
  constructor(
    private assetsApiService: AssetsApiService,
    private store: Store<CoreState>) {
  }

  public create(aAsset: Asset): Observable<Asset> {
    return this.assetsApiService.create(aAsset.toJson())
      .pipe(
        mergeMap((aAssetResponse: AssetResponse) => this.assetFromResponse(aAssetResponse))
      );
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
        map((aResponse: StageResponse[]) => aResponse.map(aStage => new Stage(aStage)))
      );
  }

  public measurements(): Observable<AssetMeasurement[]> {
    const measurements = [
      new AssetMeasurement({ id: 'buc', code: 'Bucati' }),
      new AssetMeasurement({ id: 'kg', code: 'Kilograme' }),
      new AssetMeasurement({ id: 'l', code: 'Litri' }),
    ];

    return Observable.of(measurements);
  }

  public currencies(): Observable<AssetCurrency[]> {
    const currencies = [
      new AssetCurrency({ id: 'ron', code: 'RON' }),
      new AssetCurrency({ id: 'eur', code: 'EUR' }),
      new AssetCurrency({ id: 'usd', code: 'USD' }),
    ];

    return Observable.of(currencies);
  }

  public loadAssetDetails(aAssetId: number) {
    return this.assetsApiService.assetDetails(aAssetId)
      .pipe(
        mergeMap((aAssetResponse: AssetDetailResponse) => this.assetFromDetailResponse(aAssetResponse))
      );
  }

  private assetFromResponse(aResponse: AssetResponse): Observable<Asset> {
    return Observable.zip(
      this.store.select(fromSelectors.getCategoryByName(aResponse.assetCategory)),
      this.store.select(fromSelectors.getCategoryByName(aResponse.assetSubcategory)),
      this.store.select(fromSelectors.getStageByName(aResponse.currentStage)),
      (aCategory: Category, aSubcategory: Category, aStage: Stage) => {
        const theAsset = new Asset();
        theAsset.fromAssetResponseJson(aResponse);
        theAsset.setCategory(aCategory);
        theAsset.setSubcategory(aSubcategory);
        theAsset.setStage(aStage);

        return theAsset;
      }
    ).pipe(
      take(1)
    );
  }

  private assetFromDetailResponse(aResponse: AssetDetailResponse): Observable<Asset> {
    return Observable.zip(
      this.store.select(fromSelectors.getCategoryById(aResponse.subcategoryId)),
      this.store.select(fromSelectors.getStageById(aResponse.stageId)),
      (aSubcategory: Category, aStage: Stage) => {
        const theAsset = new Asset();
        theAsset.fromAssetDetailResponseJson(aResponse);
        theAsset.setCategory(aSubcategory.parent);
        theAsset.setSubcategory(aSubcategory);
        theAsset.setStage(aStage);

        return theAsset;
      }
    ).pipe(
      take(1)
    );
  }
}
