import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { Category } from 'shared/models/category.model';

@Injectable()
export class CategoriesHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<Category[]> {
    return this.http
      .get(environment.api_url + '/categories')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
