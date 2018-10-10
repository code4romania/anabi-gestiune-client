import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { DecisionsApiService } from '../http';
import { Decision, DecisionResponse } from '../models';

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
}
