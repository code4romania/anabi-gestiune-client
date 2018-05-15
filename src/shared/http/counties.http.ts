import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {County} from 'shared/models/county.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountiesHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<County[]> {
    return this.http
      .get(environment.api_url + '/counties')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
