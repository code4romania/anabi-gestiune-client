import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { CategoryResponse } from '../models';

@Injectable()
export class CategoriesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(environment.api_url + '/categories')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
