import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Stage} from 'shared/models/stage.model';

@Injectable()
export class StagesHttp {
  constructor(private _http: Http) { }

  public list(): Observable<Stage[]> {
    return this._http
      .get(environment.api_url + '/stages')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
