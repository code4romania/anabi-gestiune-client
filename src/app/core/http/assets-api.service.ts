import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import {
  Asset,
  AssetCategory,
  AssetCurrency,
  AssetDetailResponse,
  AssetMeasurement,
  AssetResponse,
  AssetSubcategory,
  Stage
} from '../models';

@Injectable()
export class AssetsApiService {
  constructor(private http: HttpClient) {}

  public categories(): Observable<AssetCategory[]> {
    return this.http.get(`${environment.api_url}/assets/parentcategories`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public subcategories(categoryId): Observable<AssetSubcategory[]> {
    return this.http.get(`${environment.api_url}/assets/subcategories/${categoryId}`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public stages(): Observable<Stage[]> {
    return this.http.get(`${environment.api_url}/assets/stages`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public measurements(): Observable<AssetMeasurement[]> {
    const measurements = [
      new AssetMeasurement({id: 'buc', code: 'Bucati'}),
      new AssetMeasurement({id: 'kg', code: 'Kilograme'}),
      new AssetMeasurement({id: 'l', code: 'Litri'}),
    ];

    return Observable.create(observer => {
      observer.next(measurements);
    });
  }

  public currencies(): Observable<AssetCurrency[]> {
    const currencies = [
      new AssetCurrency({id: 'ron', code: 'RON'}),
      new AssetCurrency({id: 'eur', code: 'EUR'}),
      new AssetCurrency({id: 'usd', code: 'USD'}),
    ];

    return Observable.create(observer => {
      observer.next(currencies);
    });
  }

  public list(): Observable<AssetResponse[]> {
    return this.http
      .get(`${environment.api_url}/assets`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public assetDetails(id: number): Observable<AssetDetailResponse> {
    return this.http
      .get(`${environment.api_url}/assets/${id}`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public create(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${environment.api_url}/assets/addminimalasset`, asset)
      .catch((error: any) => Observable.throw(error.error.errors));
  }
}
