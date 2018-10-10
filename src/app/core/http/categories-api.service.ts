import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { CategoryResponse } from '../models';

@Injectable()
export class CategoriesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<CategoryResponse[]> {
    return this.http.get(environment.api_url + '/categories')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
