import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { StorageSpace } from '../models';

@Injectable()
export class StorageSpacesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpace[]> {
    return this.http.get(environment.api_url + '/storageSpaces')
      .pipe(
        map((aResponse: Response) => aResponse),
        catchError(aError => Observable.throw(aError))
      );
  }
}
