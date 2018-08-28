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
  AssetRequest,
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

  public create(asset: AssetRequest): Observable<AssetResponse> {
    return this.http.post<AssetResponse>(`${environment.api_url}/assets/addminimalasset`, asset)
      .catch((error: any) => Observable.throw(error.error.errors));
  }
}
