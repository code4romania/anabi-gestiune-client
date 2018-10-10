import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { RecoveryBeneficiaryResponse } from '../models';

@Injectable()
export class RecoveryBeneficiariesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<RecoveryBeneficiaryResponse[]> {
    return this.http.get(environment.api_url + '/recoveryBeneficiaries')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
