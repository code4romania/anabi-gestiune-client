import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

import { AssetsService } from '../../services';
import * as assetActions from '../actions/assets.action';
import * as loadingActions from '../actions/loading.action';

@Injectable()
export class AssetsEffects {

  @Effect()
  loadAssets$ = this.actions$
    .pipe(
      ofType(assetActions.LOAD_ASSETS),
      switchMap(() => {
        return this.assetsService
          .list()
          .pipe(
            map(aAssets => new assetActions.LoadAssetsSuccess(aAssets)),
            catchError(error => of(new assetActions.LoadAssetsFail(error)))
          )
      })
    );

  @Effect()
  loadAssetDetail$ = this.actions$
    .pipe(
      ofType(assetActions.LOAD_ASSET_DETAIL),
      map((action: assetActions.LoadAssetDetail) => action.payload),
      switchMap((aPayload) => {
        return this.assetsService
          .loadAssetDetails(aPayload)
          .pipe(
            map(aAsset => new assetActions.LoadAssetDetailSuccess(aAsset)),
            catchError(error => of(new assetActions.LoadAssetDetailFail(error)))
          )
      })
    );

  @Effect()
  updateAsset$ = this.actions$
    .pipe(
      ofType(assetActions.ASSET_UPDATE),
      map((action: assetActions.UpdateAsset) => action.payload),
      switchMap(aPayload => {
        return this.assetsService.update(aPayload).pipe(
          map(aAsset => new assetActions.UpdateAssetSuccess(aAsset)),
          catchError(error => of(new assetActions.UpdateAssetFail(error)))
        );
      })
    );

  @Effect()
  showLoading$ = this.actions$
    .pipe(
      ofType(assetActions.LOAD_ASSETS, assetActions.LOAD_ASSET_DETAIL),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        assetActions.LOAD_ASSETS_FAIL,
        assetActions.LOAD_ASSETS_SUCCESS,
        assetActions.LOAD_ASSET_DETAIL_FAIL,
        assetActions.LOAD_ASSET_DETAIL_SUCCESS
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(private actions$: Actions,
              private assetsService: AssetsService) { }
}
