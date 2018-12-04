import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { SolutionsApiService } from '../http';
import { Asset, Solution, SolutionResponse } from '../models';

@Injectable()
export class SolutionsService {
  constructor(private solutionsApiService: SolutionsApiService) {
  }

  public getSolutions(aAsset: Asset): Observable<Solution[]> {
    return this.solutionsApiService.getSolutions(aAsset.id)
      .pipe(
        mergeMap(aSolutions => aSolutions),
        map((aSolution: SolutionResponse) =>  {
          const theSolution = new Solution(aSolution);
          theSolution.setAsset(aAsset);
          return theSolution;
        }),
        toArray()
      );
  }

  public createSolution(aSolution: Solution): Observable<Solution> {
    return this.solutionsApiService.createSolution(aSolution.getAsset().id, aSolution.toJson())
      .pipe(
        map((aSolutionResponse: SolutionResponse) => {
          const theSolution = new Solution(aSolutionResponse);
          theSolution.setAsset(aSolution.getAsset());
          return theSolution;
        })
      );
  }
}
