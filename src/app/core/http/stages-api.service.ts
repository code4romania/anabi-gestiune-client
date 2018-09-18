import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { StageResponse } from '../models';

@Injectable()
export class StagesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StageResponse[]> {
    return this.http.get(environment.api_url + '/stages')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
