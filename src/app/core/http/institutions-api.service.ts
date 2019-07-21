import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { InstitutionResponse } from '../models/institution-response.interface';

@Injectable()
export class InstitutionsApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<InstitutionResponse[]> {
    return this.http
      .get<InstitutionResponse[]>(environment.api_url + '/institutions')
      .pipe(
        catchError(error => observableThrowError(error))
      );
  }
}
