import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class AssetsGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => Observable.of(true)),
        catchError(() => Observable.of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAssetsLoaded)
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadAssets());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }
}
