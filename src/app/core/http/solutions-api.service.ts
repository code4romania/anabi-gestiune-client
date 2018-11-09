import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { SolutionRequest, SolutionResponse } from '../models';

@Injectable()
export class SolutionsApiService {
  constructor(private http: HttpClient) { }

  public getSolutions(aAssetId: number): Observable<SolutionResponse[]> {
    return this.http
      .get<SolutionResponse[]>(`${environment.api_url}/assets/${aAssetId}/solutions`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public createSolution(aAssetId: number, aSolution: SolutionRequest): Observable<SolutionResponse> {
    return this.http
      .post<SolutionResponse>(`${environment.api_url}/assets/${aAssetId}/solutions`, aSolution)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
