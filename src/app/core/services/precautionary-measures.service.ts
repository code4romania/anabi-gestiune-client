import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PrecautionaryMeasuresApiService } from '../http';
import { PrecautionaryMeasure, PrecautionaryMeasureResponse } from '../models';

@Injectable()
export class PrecautionaryMeasuresService {
  constructor(private precautionaryMeasuresApiService: PrecautionaryMeasuresApiService) {
  }

  public list(): Observable<PrecautionaryMeasure[]> {
    return this.precautionaryMeasuresApiService.list()
      .pipe(
        map((aResponse: object[]) => aResponse.map((aCategory: PrecautionaryMeasureResponse) => new PrecautionaryMeasure(aCategory)))
      );
  }
}
