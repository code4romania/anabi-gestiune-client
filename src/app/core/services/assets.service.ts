import { Injectable } from '@angular/core';
import { of, zip, Observable } from 'rxjs';
import { map, mergeMap, take, toArray } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { CoreState } from '../store/reducers/index';
import * as fromSelectors from '../store/selectors';

import { AssetsApiService } from '../http';
import {
  Address,
  AddressResponse,
  Asset,
  AssetCurrency,
  AssetDetailResponse,
  AssetMeasurement,
  AssetRequest,
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
    return this.assetsApiService.create(this.toRequest(aAsset))
      .pipe(
        mergeMap((aAssetResponse: AssetDetailResponse) => this.fromDetailResponse(aAssetResponse))
      );
  }

  public update(aAsset: Asset): Observable<Asset> {
    return this.assetsApiService.update(aAsset.id, this.toRequest(aAsset))
      .pipe(
        mergeMap((aAssetResponse: AssetDetailResponse) => this.fromDetailResponse(aAssetResponse))
      );
  }

  public list(): Observable<Asset[]> {
    return this.assetsApiService.list()
      .pipe(
        mergeMap(a => a),
        mergeMap((aAssetResponse: AssetResponse) => this.fromResponse(aAssetResponse)),
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

    return of(measurements);
  }

  public currencies(): Observable<AssetCurrency[]> {
    const currencies = [
      new AssetCurrency({ id: 'ron', code: 'RON' }),
      new AssetCurrency({ id: 'eur', code: 'EUR' }),
      new AssetCurrency({ id: 'usd', code: 'USD' }),
    ];

    return of(currencies);
  }

  public loadAssetDetails(aAssetId: number) {
    return this.assetsApiService.assetDetails(aAssetId)
      .pipe(
        mergeMap((aAssetResponse: AssetDetailResponse) => this.fromDetailResponse(aAssetResponse))
      );
  }

  private toRequest(aAsset: Asset): AssetRequest {
    return {
      name: aAsset.name,
      categoryId: aAsset.category ? aAsset.category.id : null,
      subcategoryId: aAsset.subcategory ? aAsset.subcategory.id : null,
      stageId: aAsset.stage ? aAsset.stage.id : null,
      quantity: aAsset.quantity,
      measureUnit: aAsset.measureUnit,
      estimatedAmount: aAsset.estimatedAmount,
      estimatedAmountCurrency: aAsset.estimatedAmountCurrency,
      description: aAsset.description,
      identifier: aAsset.identifier,
      remarks: aAsset.remarks,
    } as AssetRequest;
  }

  private fromResponse(aResponse: AssetResponse): Observable<Asset> {
    return zip(
      this.store.pipe(select(fromSelectors.getCategoryByName(aResponse.assetCategory))),
      this.store.pipe(select(fromSelectors.getCategoryByName(aResponse.assetSubcategory))),
      this.store.pipe(select(fromSelectors.getStageByName(aResponse.currentStage))),
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

  private fromDetailResponse(aResponse: AssetDetailResponse): Observable<Asset> {
    return zip(
      this.store.pipe(select(fromSelectors.getCategoryById(aResponse.subcategoryId))),
      this.store.pipe(select(fromSelectors.getStageById(aResponse.stageId))),
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
