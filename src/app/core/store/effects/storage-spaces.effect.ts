import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map, mapTo } from 'rxjs/operators';

import { StorageSpace } from '../../models';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as storageSpaceActions from '../actions/storage-spaces.action';

@Injectable()
export class StorageSpacesEffect {

  @Effect()
  createStorageSpace$ = this.actions$
    .pipe(
      ofType(storageSpaceActions.STORAGE_SPACE_CREATE),
      map((action: storageSpaceActions.CreateStorageSpace) => action.payload),
      map(aPayload => new storageSpaceActions.CreateStorageSpaceSuccess(aPayload))
    );

  @Effect()
  createStorageSpaceSuccess$ = this.actions$
    .pipe(
      ofType(storageSpaceActions.STORAGE_SPACE_CREATE_SUCCESS),
      map((action: storageSpaceActions.CreateStorageSpaceSuccess) => action.payload),
      map((aStorageSpace: StorageSpace) => new assetPropertiesActions.DeleteProperty(aStorageSpace.getAsset().id))
    );

  constructor(private actions$: Actions) {
  }
}
