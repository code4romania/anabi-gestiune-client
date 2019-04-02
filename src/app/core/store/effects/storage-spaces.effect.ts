import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

// model
import { StorageSpace } from '../../models';

// services
import { StorageSpacesService } from '../../services';

// actions
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as loadingActions from '../actions/loading.action';
import * as storageSpaceActions from '../actions/storage-spaces.action';

@Injectable()
export class StorageSpacesEffects {

  @Effect()
  loadStorageSpaces$ = this.actions$
    .pipe(
    ofType(storageSpaceActions.LOAD_STORAGE_SPACES),
    switchMap(() => {
      return this.storageSpaceService
        .list()
        .pipe(
          map(aStorageSpaces => new storageSpaceActions.LoadStorageSpacesSuccess(aStorageSpaces)),
          catchError(error => of(new storageSpaceActions.LoadStorageSpacesFail(error)))
        )
      })
    );

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

  @Effect()
  showLoading$ = this.actions$
    .pipe(
      ofType(storageSpaceActions.LOAD_STORAGE_SPACES),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        storageSpaceActions.LOAD_STORAGE_SPACES_FAIL,
        storageSpaceActions.LOAD_STORAGE_SPACES_SUCCESS
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(
    private actions$: Actions,
    private storageSpaceService: StorageSpacesService
  ) {
  }
}
