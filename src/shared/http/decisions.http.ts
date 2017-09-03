import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Decision} from 'shared/models/decision.model';
import {DecisionSummary} from 'shared/models/decisionSummary.model'

@Injectable()
export class DecisionsHttp {
  constructor(private _http: Http) { }

  public list(): Observable<Decision[]> {
    return this._http
      .get(environment.api_url + '/decisions')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public search(): Observable<DecisionSummary[]> {
      return this._http
        .get(environment.api_url + '/decisions/search')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
