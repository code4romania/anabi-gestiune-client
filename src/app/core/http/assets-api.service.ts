import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import {
  AddressRequest,
  AddressResponse,
  Asset,
  AssetCategory,
  AssetCurrency,
  AssetDetailResponse,
  AssetMeasurement,
  AssetRequest,
  AssetResponse,
  AssetSubcategory,
  Stage,
} from '../models';

@Injectable()
export class AssetsApiService {
  constructor(private http: HttpClient) {}

  public categories(): Observable<AssetCategory[]> {
    return this.http.get<AssetCategory[]>(`${environment.api_url}/assets/parentcategories`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public subcategories(categoryId): Observable<AssetSubcategory[]> {
    return this.http.get<AssetSubcategory[]>(`${environment.api_url}/assets/subcategories/${categoryId}`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public stages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(`${environment.api_url}/assets/stages`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public list(): Observable<AssetResponse[]> {
    return this.http.get<AssetResponse[]>(`${environment.api_url}/assets`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public assetDetails(id: number): Observable<AssetDetailResponse> {
    return this.http.get<AssetDetailResponse>(`${environment.api_url}/assets/${id}`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public create(asset: AssetRequest): Observable<AssetDetailResponse> {
    return this.http.post<AssetDetailResponse>(`${environment.api_url}/assets/addminimalasset`, asset)
      .pipe(
        catchError(aError => observableThrowError(aError.error.errors))
      );
  }

  public update(id: number, asset: AssetRequest): Observable<AssetDetailResponse> {
    return this.http.put<AssetDetailResponse>(`${environment.api_url}/assets/${id}/minimalasset`, asset)
      .pipe(
        catchError(aError => observableThrowError(aError.error.errors))
      );
  }
}
