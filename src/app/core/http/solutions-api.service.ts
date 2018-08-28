import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

import { SolutionResponse } from '../models';

@Injectable()
export class SolutionsApiService {
  constructor(private http: HttpClient) { }

  public getSolutions(aAssetId: number): Observable<SolutionResponse[]> {
    return this.http
      .get(`${environment.api_url}/assets/${aAssetId}/solutions`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }
}
