import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
// services
import { StorageSpacesApiService } from '../http';
import { StorageSpace, StorageSpaceRequest, StorageSpaceResponse } from '../models';

@Injectable()
export class StorageSpacesService {
  constructor(private storageSpacesApiService: StorageSpacesApiService) {
  }

  public create(request: StorageSpaceRequest): Observable<StorageSpace> {
    return this.storageSpacesApiService
    .create(request)
    .pipe(
      // Todo: Update after API return StorageSpaceResponse instead of item Id
      // API get by id currently not working
      // mergeMap((itemId: number) => this.storageSpacesApiService.get(itemId)),
      map(() => new StorageSpace())
      );
  }

  public list(): Observable<StorageSpace[]> {
    return this.storageSpacesApiService.list().pipe(
        mergeMap(aStorageSpace => aStorageSpace),
        map((aStorageSpace: StorageSpaceResponse) => new StorageSpace(aStorageSpace)),
        toArray()
    );
  }
}
