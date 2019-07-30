import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class AssetDetailGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theAssetId = parseInt((route.params as any).assetId, 10);

    return this.hasDetailedAsset(theAssetId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasDetailedAsset(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.hasDetailByAssetId(aId)))
      .pipe(
      tap((hasDetail: boolean) => {
        if (!hasDetail) {
          this.store.dispatch(new fromStore.LoadAssetDetail(aId));
        }
      }),
      filter((hasDetail: boolean) => hasDetail),
      take(1)
    );
  }
}
