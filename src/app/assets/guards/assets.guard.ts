import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { zip } from 'rxjs/observable/zip';

import { Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class AssetsGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) {
  }

  canActivate(): Observable<boolean> {
    return this.check()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
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

  check(): Observable<boolean> {
    return zip(
      this.store.select(fromStore.getAssetsLoaded),
      this.store.select(fromStore.getInstitutionsLoaded),
      this.store.select(fromStore.getDecisionsLoaded),
      (aAssetsLoaded: boolean, aInstitutionsLoaded: boolean, aDecisionsLoaded: boolean) => {
        let allLoaded = true;
        if (!aAssetsLoaded) {
          this.store.dispatch(new fromStore.LoadAssets());
          allLoaded = false;
        }

        if (!aInstitutionsLoaded) {
          this.store.dispatch(new fromStore.LoadInstitutions());
          allLoaded = false;
        }

        if (!aDecisionsLoaded) {
          this.store.dispatch(new fromStore.LoadDecisions());
          allLoaded = false;
        }

        return allLoaded;
      }
    ).pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}
