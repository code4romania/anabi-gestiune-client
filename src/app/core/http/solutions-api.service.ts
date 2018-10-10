import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { SolutionRequest, SolutionResponse } from '../models';

@Injectable()
export class SolutionsApiService {
  constructor(private http: HttpClient) { }

  public getSolutions(aAssetId: number): Observable<SolutionResponse[]> {
    return this.http
      .get(`${environment.api_url}/assets/${aAssetId}/solutions`)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }

  public createSolution(aAssetId: number, aSolution: SolutionRequest) {
    return this.http
      .post(`${environment.api_url}/assets/${aAssetId}/solutions`, aSolution)
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
