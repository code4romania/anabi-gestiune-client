import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env/environment';

import { OwnerRequest, OwnerResponse } from '../models';

@Injectable()
export class OwnersApiService {

  constructor(private http: HttpClient) {}

  public createOwner$(assetId: number, aOwnerRequest: OwnerRequest): Observable<OwnerResponse> {
    return this.http
      .post<OwnerResponse>(
        `${environment.api_url}/assets/${assetId}/owner`,
        aOwnerRequest)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public getOwners$(assetId: number): Observable<OwnerResponse[]> {
    return this.http
      .get<OwnerResponse[]>(
        `${environment.api_url}/assets/${assetId}/owners`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public deleteOwner$(assetId: number, ownerId: number): Observable<number> {
    return this.http
      .delete<number>(
        `${environment.api_url}/assets/${assetId}/owners/${ownerId}`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public updateOwner$(assetId: number, ownerRequest: OwnerRequest): Observable<OwnerResponse> {
    return this.http
      .put<OwnerResponse>(
        `${environment.api_url}/assets/${assetId}/owner/${ownerRequest.id}`,
        ownerRequest
      )
      .pipe(
        map(response => {
          response.id = ownerRequest.id;
          return response
        }),
        catchError(err => throwError(err))
      )
  }
}
