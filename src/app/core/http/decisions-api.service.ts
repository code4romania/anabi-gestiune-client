import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

import { Decision, DecisionFilter, DecisionResponse, DecisionSummary } from '../models';

@Injectable()
export class DecisionsApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<DecisionResponse[]> {
    return this.http.get<DecisionResponse[]>(environment.api_url + '/decisions')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public search(filter: DecisionFilter): Observable<DecisionSummary[]> {
      const params = new HttpParams();
      for (const key in filter) {
          if (filter.hasOwnProperty(key)) {
              params.set(key, filter[key]);
          }
      }

      return this.http.get<DecisionSummary[]>(environment.api_url + '/search/asset', { params })
        .pipe(
          catchError(aError => observableThrowError(aError))
        );
  }
}
