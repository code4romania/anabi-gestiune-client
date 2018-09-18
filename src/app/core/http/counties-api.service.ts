import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { County } from '../models';

@Injectable()
export class CountiesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<County[]> {
    return this.http.get(environment.api_url + '/counties')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
