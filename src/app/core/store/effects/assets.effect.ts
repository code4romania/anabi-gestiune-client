import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AssetsService } from '../../services/assets.service';
import * as assetActions from '../actions/assets.action';

@Injectable()
export class AssetsEffects {

  @Effect()
  loadAssets$ = this.actions$
    .ofType(assetActions.LOAD_ASSETS)
    .pipe(
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
    .ofType(assetActions.LOAD_ASSET_DETAIL)
    .pipe(
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

  constructor(private actions$: Actions,
              private assetsService: AssetsService
  ) {
  }
}
