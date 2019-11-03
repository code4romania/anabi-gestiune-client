import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Owner } from '../../models';
import { OwnersService } from '../../services';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as ownersActions from '../actions/owner.action';

import { Store } from '@ngrx/store';
import { AssetState } from '../reducers';

@Injectable()
export class OwnersEffects {

  @Effect()
  createOwner$ = this.actions$
    .pipe(
      ofType(ownersActions.OwnersActionTypes.CreateOwner),
      map((action: ownersActions.CreateOwner) => action.payload),
      switchMap(aPayload => {
        return this.defendantsService.createOwner$(aPayload).pipe(
          map(aOwner => new ownersActions.CreateOwnerSuccess(aOwner)),
          catchError(error => of(new ownersActions.CreateOwnerFail(error)))
        );
      })
    );

  @Effect()
  createOwnerSuccess$ = this.actions$
    .pipe(
      ofType(ownersActions.OwnersActionTypes.CreateOwnerSuccess),
      map((action: ownersActions.CreateOwnerSuccess) => action.payload),
      map((aOwner: Owner) => new assetPropertiesActions.DeleteProperty(aOwner.getAsset().id))
    );

  constructor(
    private actions$: Actions,
    private defendantsService: OwnersService,
    private store: Store<AssetState>
  ) {
  }
}
