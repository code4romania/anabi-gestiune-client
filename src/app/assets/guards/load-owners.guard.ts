import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { of, Observable } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';

import * as fromStore from '../../core/store';

@Injectable()
export class LoadOwnersGuard implements CanActivate {

  constructor(private store: Store<fromStore.OwnersState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theAssetId = Number((route.params as any).assetId);

    return this.hasOwnersLoaded(theAssetId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      )
  }

  hasOwnersLoaded(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getOwnersLoadedForAssetId(aId)))
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadOwners(aId));
          }
        }),
        filter(loaded => loaded),
        take(1)
      )
  }
}
