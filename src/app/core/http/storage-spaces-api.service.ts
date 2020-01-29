import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageSpaceRequest, StorageSpaceResponse } from '../models';

@Injectable()
export class StorageSpacesApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpaceResponse[]> {
    return this.http.get<StorageSpaceResponse[]>(environment.api_url + '/storageSpaces')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public create(request: StorageSpaceRequest): Observable<number> {
    return this.http.post<number>(`${environment.api_url}/storageSpaces`, request)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }

  public get(id: number): Observable<StorageSpaceResponse> {
    return this.http.get<StorageSpaceResponse>(`${environment.api_url}/storageSpaces/${id}`)
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
