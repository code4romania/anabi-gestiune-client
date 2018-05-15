import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Decision} from 'shared/models/decision.model';
import {DecisionSummary} from 'shared/models/decisionSummary.model';
import {DecisionFilter} from 'shared/models/search/decisionFilter.model';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class DecisionsHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<Decision[]> {
    return this.http
      .get(environment.api_url + '/decisions')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

  public search(filter: DecisionFilter): Observable<DecisionSummary[]> {
      const params = new HttpParams();
      for (const key in filter) {
          if (filter.hasOwnProperty(key)) {
              params.set(key, filter[key]);
          }
      }

      return this.http
        .get(environment.api_url + '/decisions/search', { params: params })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error));
  }

}
