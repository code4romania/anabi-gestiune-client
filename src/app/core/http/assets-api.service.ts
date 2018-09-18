import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

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
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public subcategories(categoryId): Observable<AssetSubcategory[]> {
    return this.http.get(`${environment.api_url}/assets/subcategories/${categoryId}`)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public stages(): Observable<Stage[]> {
    return this.http.get(`${environment.api_url}/assets/stages`)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public list(): Observable<AssetResponse[]> {
    return this.http.get(`${environment.api_url}/assets`)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public assetDetails(id: number): Observable<AssetDetailResponse> {
    return this.http.get(`${environment.api_url}/assets/${id}`)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public create(asset: AssetRequest): Observable<AssetResponse> {
    return this.http.post<AssetResponse>(`${environment.api_url}/assets/addminimalasset`, asset)
      .pipe(
        catchError(aError => Observable.throw(aError.error.errors))
      );
  }
}
