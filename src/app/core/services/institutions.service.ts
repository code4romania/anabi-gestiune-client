import { Injectable } from '@angular/core';

import { zip, Observable } from 'rxjs';
import { map, mergeMap, take, toArray} from 'rxjs/operators';

import { InstitutionsApiService } from '../http';
import { Institution, InstitutionResponse } from '../models';

import { select, Store } from '@ngrx/store';
import { CoreState } from '../store/reducers/index';
import * as fromSelectors from '../store/selectors';

@Injectable()
export class InstitutionsService {
  constructor(
    private institutionsApiService: InstitutionsApiService,
    private store: Store<CoreState>) {
  }

  public list(): Observable<Institution[]> {
    return this.institutionsApiService.list()
      .pipe(
        mergeMap(a => a),
        map((aInstitution: InstitutionResponse) => new Institution(aInstitution)),
        toArray()
      );
  }

  // private institutionFromResponse(aResponse: InstitutionResponse): Observable<Institution> {
  //   return zip(
  //     this.store.pipe(select(fromSelectors.getCategoryById(aResponse.categoryId))),
  //     (aCategory: Category) => {
  //       const theInstitution = new Institution(aResponse);
  //       theInstitution.setCategory(aCategory);
  //       return theInstitution;
  //     }
  //   ).pipe(
  //     take(1)
  //   );
  // }
}
