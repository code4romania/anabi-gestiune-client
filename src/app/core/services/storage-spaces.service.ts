import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

import { StorageSpace, StorageSpaceResponse } from '../models';

// services
import { StorageSpacesApiService } from '../http';

@Injectable()
export class StorageSpacesService {
  constructor(private storageSpacesApiService: StorageSpacesApiService) {
  }

  public list(): Observable<StorageSpace[]> {
    return this.storageSpacesApiService.list().pipe(
        mergeMap(aStorageSpace => aStorageSpace),
        map((aStorageSpace: StorageSpaceResponse) => new StorageSpace(aStorageSpace)),
        toArray()
    );
  }
}
