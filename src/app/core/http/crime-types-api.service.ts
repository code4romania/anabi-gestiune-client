import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { CrimeTypeResponse } from '../models';

@Injectable()
export class CrimeTypesApiService {
  constructor(private http: HttpClient) {
  }

  public list(): Observable<CrimeTypeResponse[]> {
    return this.http.get<CrimeTypeResponse[]>(environment.api_url + '/crimetypes')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
