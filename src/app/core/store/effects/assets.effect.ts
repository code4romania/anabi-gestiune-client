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
            map(aCategories => new assetActions.LoadAssetsSuccess(aCategories)),
            catchError(error => of(new assetActions.LoadAssetsFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private assetsService: AssetsService
  ) {
  }
}
