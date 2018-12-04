import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { RecoveryBeneficiaryResponse } from '../models';

@Injectable()
export class RecoveryBeneficiariesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<RecoveryBeneficiaryResponse[]> {
    return this.http
      .get<RecoveryBeneficiaryResponse[]>(environment.api_url + '/recoveryBeneficiaries')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
