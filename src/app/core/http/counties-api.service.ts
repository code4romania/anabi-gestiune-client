import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { County } from '../models';

@Injectable()
export class CountiesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<County[]> {
    return this.http.get<County[]>(environment.api_url + '/counties')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
