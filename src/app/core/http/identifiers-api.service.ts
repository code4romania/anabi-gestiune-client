import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IdentifierResponse } from '../models';

@Injectable()
export class IdentifiersApiService {
  constructor(private http: HttpClient) {
  }

  public getIdentifiers$(aIdentifiersForPerson: boolean): Observable<IdentifierResponse[]> {
    return this.http.get<IdentifierResponse[]>(`${environment.api_url}/person/identifiers?isForPerson=${aIdentifiersForPerson}`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
