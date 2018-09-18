import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { CrimeTypeResponse } from '../models';

@Injectable()
export class CrimeTypesApiService {
  constructor(private http: HttpClient) {
  }

  public list(): Observable<CrimeTypeResponse[]> {
    return this.http.get(environment.api_url + '/crimetypes')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
