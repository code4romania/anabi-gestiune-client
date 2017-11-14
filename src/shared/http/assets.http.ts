import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Asset} from 'shared/models/asset.model';

@Injectable()
export class AssetsHttp {
  constructor(private _http: Http) { }

  public details(id): Observable<Asset> {
    return this._http
      .get(environment.api_url + '/assets/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
