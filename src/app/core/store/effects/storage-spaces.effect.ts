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
    ofType(storageSpaceActions.StorageSpaceActionTypes.LoadStorageSpaces),
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
      ofType(storageSpaceActions.StorageSpaceActionTypes.CreateStorageSpace),
      map((action: storageSpaceActions.CreateStorageSpace) => action.payload),
      map(aPayload => new storageSpaceActions.CreateStorageSpaceSuccess(aPayload))
    );

  @Effect()
  createStorageSpaceSuccess$ = this.actions$
    .pipe(
      ofType(storageSpaceActions.StorageSpaceActionTypes.CreateStorageSpaceSuccess),
      map((action: storageSpaceActions.CreateStorageSpaceSuccess) => action.payload),
      map((aStorageSpace: StorageSpace) => new assetPropertiesActions.DeleteProperty(aStorageSpace.getAssetId()))
    );

  @Effect()
  showLoading$ = this.actions$
    .pipe(
      ofType(storageSpaceActions.StorageSpaceActionTypes.LoadStorageSpaces),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        storageSpaceActions.StorageSpaceActionTypes.LoadStorageSpacesFail,
        storageSpaceActions.StorageSpaceActionTypes.LoadStorageSpacesSuccess
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(
    private actions$: Actions,
    private storageSpaceService: StorageSpacesService
  ) {
  }
}
