import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { Institution } from '../models';

@Injectable()
export class InstitutionsApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<Institution[]> {
    return this.http
      .get(environment.api_url + '/institutions')
      .pipe(
        map((response: Response) => response),
        catchError(error => Observable.throw(error))
      );
  }
}
