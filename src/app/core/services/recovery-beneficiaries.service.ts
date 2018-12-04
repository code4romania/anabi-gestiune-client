import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { RecoveryBeneficiariesApiService } from '../http';
import { RecoveryBeneficiary, RecoveryBeneficiaryResponse } from '../models';

@Injectable()
export class RecoveryBeneficiariesService {
  constructor(private recoveryBeneficiariesApiService: RecoveryBeneficiariesApiService) {
  }

  public list(): Observable<RecoveryBeneficiary[]> {
    return this.recoveryBeneficiariesApiService.list()
      .pipe(
        mergeMap(aRB => aRB),
        map((aRB: RecoveryBeneficiaryResponse) =>  new RecoveryBeneficiary(aRB)),
        toArray()
      );
  }
}
