import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { Stage } from '../models';

@Injectable()
export class StagesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<Stage[]> {
    return this.http
      .get(environment.api_url + '/stages')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
