import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { environment } from '@env/environment';
import { InstitutionResponse } from '../models/institution-response.interface';
import * as fromMock from '../models/mock-data';

@Injectable()
export class InstitutionsApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<InstitutionResponse[]> {
    return of(fromMock.institutionsMockData).pipe(delay(400));
    return this.http
      .get<InstitutionResponse[]>(environment.api_url + '/institutions')
      .pipe(
        catchError(error => observableThrowError(error))
      );
  }
}
