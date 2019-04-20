import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountiesApiService } from '../http';
import { County, CountyResponse } from '../models';

@Injectable()
export class CountiesService {
  constructor(private countiesApiService: CountiesApiService) {
  }

  public list$(): Observable<County[]> {
    return this.countiesApiService.list()
      .pipe(
        map((aResponse: object[]) => aResponse.map((aCounty: CountyResponse) => this.fromResponse(aCounty)))
      );
  }

  private fromResponse(aCountyResponse: CountyResponse): County {
    const theCounty = new County();
    theCounty.fromResponse(aCountyResponse);
    return theCounty;
  }
}
