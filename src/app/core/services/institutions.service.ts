import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip';
import { mergeMap, take, toArray } from 'rxjs/operators';

import { InstitutionsApiService } from '../http';
import { Category, Institution, InstitutionResponse } from '../models';

import { Store } from '@ngrx/store';
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
        mergeMap((aInstitution: InstitutionResponse) => this.institutionFromResponse(aInstitution)),
        toArray()
      );
  }

  private institutionFromResponse(aResponse: InstitutionResponse): Observable<Institution> {
    return zip(
      this.store.select(fromSelectors.getCategoryById(aResponse.categoryId)),
      (aCategory: Category) => {
        const theInstitution = new Institution(aResponse);
        theInstitution.setCategory(aCategory);
        return theInstitution;
      }
    ).pipe(
      take(1)
    );
  }
}
