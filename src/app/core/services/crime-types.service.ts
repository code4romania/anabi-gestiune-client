import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { CrimeTypesApiService } from '../http';
import { CrimeType, CrimeTypeResponse } from '../models';

@Injectable()
export class CrimeTypesService {
  constructor(private crimeTypesApiService: CrimeTypesApiService) {
  }

  public list(): Observable<CrimeType[]> {
    return this.crimeTypesApiService.list()
      .pipe(
        mergeMap(aCrimeTypes => aCrimeTypes),
        map((aCrimeType: CrimeTypeResponse) =>  new CrimeType(aCrimeType)),
        toArray()
      );
  }
}
