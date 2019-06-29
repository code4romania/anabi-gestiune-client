import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class LoadAddressesGuard implements CanActivate {
  constructor(private store: Store<fromStore.AddressesState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const theAssetId = parseInt((route.params as any).assetId, 10);

    return this.hasAddressesLoaded(theAssetId)
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasAddressesLoaded(aId: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getAddressesLoadedForAssetId(aId)))
      .pipe(
        tap((aLoaded: boolean) => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadAddresses(aId));
          }
        }),
        filter((aLoaded: boolean) => aLoaded),
        take(1)
      );
  }
}
