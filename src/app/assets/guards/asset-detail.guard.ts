import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

import { Asset } from '../../core/models';

@Injectable()
export class AssetDetailGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theAssetId = parseInt((route.params as any).assetId, 10);

    return this.hasDetailedAsset(theAssetId)
      .pipe(
        switchMap(() => Observable.of(true)),
        catchError(() => Observable.of(false))
      );
  }

  hasDetailedAsset(aId: number): Observable<boolean> {
    return this.store.select(fromStore.getAssetById(aId))
      .pipe(
        tap((aAsset: Asset) => {
          if (!aAsset || (aAsset && !aAsset.isDetailed())) {
            this.store.dispatch(new fromStore.LoadAssetDetail(aId));
          }
        }),
        filter((aAsset: Asset) => aAsset && aAsset.isDetailed()),
        map((aAsset: Asset) => aAsset.isDetailed()),
        take(1)
      );
  }
}
