import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { DefendantRequest, DefendantResponse } from '../models';

@Injectable()
export class DefendantsApiService {
  constructor(private http: HttpClient) {
  }

  public createDefendant$(aAssetId: number, aDefendantRequest: DefendantRequest): Observable<DefendantResponse> {
    return this.http.post<DefendantResponse>(`${environment.api_url}/assets/${aAssetId}/defendant`, aDefendantRequest)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public getDefendants$(aAssetId: number): Observable<DefendantResponse[]> {
    return this.http.get<DefendantResponse[]>(`${environment.api_url}/assets/${aAssetId}/defendants`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public deleteDefendant(assetId: number, defendantId: number): Observable<number> {
    return this.http.delete<number>(`${environment.api_url}/assets/${assetId}/defendants/${defendantId}`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public updateDefendant(assetId: number, aDefendantRequest: DefendantRequest): Observable<DefendantResponse> {

    return this.http.put<DefendantResponse>(
      `${environment.api_url}/assets/${assetId}/defendant/${aDefendantRequest.id}`, aDefendantRequest)
      .pipe(
        map(response => {
          // FIXME: When doing a `PUT` the API doesn't return the
          // correct ID of the resource
          response.id = aDefendantRequest.id;
          return response
        }),
        catchError(aError => observableThrowError(aError))
      )
  }
}
