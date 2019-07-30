import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { DecisionsApiService } from '../http';
import { Decision, DecisionFilter, DecisionResponse } from '../models';

@Injectable()
export class DecisionsService {
  constructor(private decisionsApiService: DecisionsApiService) {
  }

  public list(): Observable<Decision[]> {
    return this.decisionsApiService.list()
      .pipe(
        mergeMap(a => a),
        map((aDecision: DecisionResponse) => new Decision(aDecision)),
        toArray()
      );
  }

  public search(filter: DecisionFilter): Observable<Decision[]> {
    return this.decisionsApiService.search(filter)
      .pipe(
        mergeMap(a => a),
        map((aDecision: DecisionResponse) => new Decision(aDecision)),
        toArray()
      );
  }
}
