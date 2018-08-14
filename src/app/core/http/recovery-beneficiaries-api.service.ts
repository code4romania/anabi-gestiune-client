import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { RecoveryBeneficiaryResponse } from '../models';

@Injectable()
export class RecoveryBeneficiariesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<RecoveryBeneficiaryResponse[]> {
    return this.http
      .get(environment.api_url + '/recoveryBeneficiaries')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }
}
