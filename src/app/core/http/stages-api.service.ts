import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { StageResponse } from '../models';

@Injectable()
export class StagesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StageResponse[]> {
    return this.http.get<StageResponse[]>(environment.api_url + '/stages')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
