import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Stage} from 'shared/models/stage.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StagesHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<Stage[]> {
    return this.http
      .get(environment.api_url + '/stages')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
