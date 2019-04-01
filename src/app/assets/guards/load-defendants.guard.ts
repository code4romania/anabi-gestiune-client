import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class LoadDefendantsGuard implements CanActivate {
  constructor(private store: Store<fromStore.DefendantsState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theAssetId = parseInt((route.params as any).assetId, 10);

    return this.hasDefendantsLoaded(theAssetId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasDefendantsLoaded(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getDefendantsLoadedForAssetId(aId)))
      .pipe(
        tap((aLoaded: boolean) => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadDefendants(aId));
          }
        }),
        filter((aLoaded: boolean) => aLoaded),
        take(1)
      );
  }
}
