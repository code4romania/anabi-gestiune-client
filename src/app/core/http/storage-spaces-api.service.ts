import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

import { StorageSpace, StorageSpaceResponse } from '../models';

@Injectable()
export class StorageSpacesApiService {
  public storageSpaces: StorageSpaceResponse[]
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpaceResponse[]> {
    return this.http.get<StorageSpaceResponse[]>(environment.api_url + '/storageSpaces')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
