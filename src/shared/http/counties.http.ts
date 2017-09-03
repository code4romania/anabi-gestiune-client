import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {County} from 'shared/models/county.model';

@Injectable()
export class CountiesHttp {
  constructor(private _http: Http) { }

  public list(): Observable<County[]> {
    return this._http
      .get(environment.api_url + '/counties')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
