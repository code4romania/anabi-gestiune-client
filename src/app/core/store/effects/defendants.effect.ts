import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { Defendant } from '../../models';
import * as assetPropertiesActions from '../actions/asset-properties.action';
import * as defendantsActions from '../actions/defendants.action';

@Injectable()
export class DefendantsEffects {

  @Effect()
  createDefendant$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANT_CREATE),
      map((action: defendantsActions.CreateDefendant) => action.payload),
      map(aPayload => new defendantsActions.CreateDefendantSuccess(aPayload))
    );

  @Effect()
  createDefendantSuccess$ = this.actions$
    .pipe(
      ofType(defendantsActions.DEFENDANT_CREATE_SUCCESS),
      map((action: defendantsActions.CreateDefendantSuccess) => action.payload),
      map((aDefendant: Defendant) => new assetPropertiesActions.DeleteProperty(aDefendant.getAsset().id))
    );

  constructor(private actions$: Actions) {
  }
}
