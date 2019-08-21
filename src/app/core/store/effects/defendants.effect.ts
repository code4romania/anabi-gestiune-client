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
      ofType(defendantsActions.DefendantsActionTypes.CreateDefendant),
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
      ofType(defendantsActions.DefendantsActionTypes.CreateDefendantSuccess),
      map((action: defendantsActions.CreateDefendantSuccess) => action.payload),
      map((aDefendant: Defendant) => new assetPropertiesActions.DeleteProperty(aDefendant.getAsset().id))
    );

  @Effect()
  loadDefendants$ = this.actions$
    .pipe(
      ofType(defendantsActions.DefendantsActionTypes.LoadDefendants),
      map((action: defendantsActions.LoadDefendants) => action.payload),
      mergeMap(aAssetId => this.store.pipe(select(assetSelectors.getAssetById(aAssetId)))),
      filter(aAsset => aAsset !== undefined),
      switchMap((aAsset) => {
        return this.defendantsService.getDefendants$(aAsset).pipe(
          map(aDefendants => new defendantsActions.LoadDefendantsSuccess(aDefendants)),
          catchError(() => of(new defendantsActions.LoadDefendantsFail(aAsset.id)))
        );
      })
    );

  @Effect()
  deleteDefendant$ = this.actions$
    .pipe(
      ofType(defendantsActions.DefendantsActionTypes.DeleteDefendant),
      map((action: defendantsActions.DeleteDefendant) => action.payload),
      switchMap((aDefendant: Defendant) =>
        this.defendantsService.deleteDefendant$(aDefendant.getAssetId(), aDefendant.id)
          .pipe(
            map((aResponse: number) => new defendantsActions.DeleteDefendantSuccess(aResponse)),
            catchError(() => of(new defendantsActions.DeleteDefendantFail(aDefendant.id)))
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
