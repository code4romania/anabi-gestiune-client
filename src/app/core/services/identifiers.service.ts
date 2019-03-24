import { Injectable } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { IdentifiersApiService } from '../http';
import { Identifier, IdentifierResponse } from '../models';

@Injectable()
export class IdentifiersService {
  constructor(private identifiersApiService: IdentifiersApiService) {
  }

  public getAllIdentifiers$(): Observable<Identifier[]> {
    return forkJoin([this.getIdentifiers$(true), this.getIdentifiers$(false)])
      .pipe(
        map(([a, b]) => [ ...a, ...b ])
      );
  }

  private getIdentifiers$(aIdentifiersForPerson: boolean): Observable<Identifier[]> {
    return this.identifiersApiService.getIdentifiers$(aIdentifiersForPerson)
      .pipe(
        mergeMap(aIdentifiers => aIdentifiers),
        map((aIdentifier: IdentifierResponse) => new Identifier({
          ...aIdentifier,
          isForCompany: !aIdentifiersForPerson,
        })),
        toArray()
      );
  }
}
