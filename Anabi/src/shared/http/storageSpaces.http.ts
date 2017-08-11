import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {StorageSpace} from 'shared/models/storageSpace.model';

@Injectable()
export class StorageSpacesHttp {
  constructor(private _http: Http) { }

  public list(): Observable<StorageSpace[]> {
    return this._http
      .get(environment.api_url + '/storageSpaces')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
