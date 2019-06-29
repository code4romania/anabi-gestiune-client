import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AddressRequest, AddressResponse } from '../models';

@Injectable()
export class AddressesApiService {
  constructor(private http: HttpClient) {
  }

  public createAddress(id: number, address: AddressRequest): Observable<AddressResponse> {
    return this.http.post<AddressResponse>(`${environment.api_url}/assets/${id}/address`, address)
      .pipe(
        catchError(aError => observableThrowError(aError.error.errors))
      );
  }

  public updateAddress(id: number, address: AddressRequest): Observable<AddressResponse> {
    return this.http.put<AddressResponse>(`${environment.api_url}/assets/${id}/address`, address)
      .pipe(
        catchError(aError => observableThrowError(aError.error.errors))
      );
  }

  public getAddress$(aAssetId: number): Observable<AddressResponse> {
    return this.http.get<AddressResponse>(`${environment.api_url}/assets/${aAssetId}/address`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
