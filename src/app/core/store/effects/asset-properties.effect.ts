import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

import { Solution } from '@app/core/models';
import * as assetPropertyActions from '../actions/asset-properties.action';
import * as solutionActions from '../actions/solutions.action';


@Injectable()
export class AssetPropertiesEffects {

  @Effect()
  createProperty$ = this.actions$
    .pipe(
      ofType(assetPropertyActions.CREATE_PROPERTY),
      map((action: assetPropertyActions.CreateProperty) => action.payload),
      map((aPayload: assetPropertyActions.AssetProperty) => {
        switch (aPayload.constructor) {
          case Solution:
            return of(new solutionActions.CreateSolution(aPayload as Solution));

          default:
            return of();
        }
      })
    );

  constructor(private actions$: Actions) {
  }
}
