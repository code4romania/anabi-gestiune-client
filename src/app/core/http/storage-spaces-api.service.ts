import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

import { StorageSpaceResponse } from '../models';

@Injectable()
export class StorageSpacesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpaceResponse[]> {
    return this.http.get<StorageSpaceResponse[]>(environment.api_url + '/storageSpaces')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
