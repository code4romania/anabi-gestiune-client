import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Defendant } from '../../models';
import { DefendantsService } from '../../services';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as defendantsActions from '../actions/defendants.action';
import * as assetSelectors from '../selectors/assets.selectors';

import { select, Store } from '@ngrx/store';
import { AssetState } from '../reducers';

@Injectable()
export class DefendantsEffects {

  @Effect()
  createDefendant$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANT_CREATE),
      map((action: defendantsActions.CreateDefendant) => action.payload),
      switchMap(aPayload => {
        return this.defendantsService.createDefendant$(aPayload).pipe(
          map(aDefendant => new defendantsActions.CreateDefendantSuccess(aDefendant)),
          catchError(error => of(new defendantsActions.CreateDefendantFail(error)))
        );
      })
    );

  @Effect()
  createDefendantSuccess$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANT_CREATE_SUCCESS),
      map((action: defendantsActions.CreateDefendantSuccess) => action.payload),
      map((aDefendant: Defendant) => new assetPropertiesActions.DeleteProperty(aDefendant.getAsset().id))
    );

  @Effect()
  loadDefendants$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANTS_LOAD),
      map((action: defendantsActions.LoadDefendants) => action.payload),
      mergeMap(aAssetId => this.store.pipe(select(assetSelectors.getAssetById(aAssetId)))),
      filter(aAsset => aAsset !== undefined),
      switchMap((aAsset) => {
        return this.defendantsService.getDefendants$(aAsset).pipe(
          map(aDefendants => new defendantsActions.LoadDefendantsSuccess({
            defendants: aDefendants,
            asset: aAsset,
          })),
          catchError(() => of(new defendantsActions.LoadDefendantsFail(aAsset.id)))
        );
      })
    );

  @Effect()
  deleteDefendant$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANT_DELETE),
      map((action: defendantsActions.DeleteDefendant) => action.payload),
      switchMap((aPayload: defendantsActions.DeleteDefendantPayload) =>
        this.defendantsService.deleteDefendant$(aPayload.assetId, aPayload.defendantId)
          .pipe(
            map((aResponse: number) => new defendantsActions.DeleteDefendantSuccess(aResponse)),
            catchError(() => of(new defendantsActions.DeleteDefendantFail(aPayload.defendantId)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private defendantsService: DefendantsService,
    private store: Store<AssetState>
  ) {
  }
}
