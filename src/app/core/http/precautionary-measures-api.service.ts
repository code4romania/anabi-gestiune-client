import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { PrecautionaryMeasureResponse } from '../models';

@Injectable()
export class PrecautionaryMeasuresApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<PrecautionaryMeasureResponse[]> {
    return this.http.get<PrecautionaryMeasureResponse[]>(environment.api_url + '/precautionarymeasures')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
