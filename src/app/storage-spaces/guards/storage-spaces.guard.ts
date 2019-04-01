import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, zip, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable({
  providedIn: 'root'
})
export class StorageSpacesGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) { }

  canActivate(): Observable<boolean> {
    return this.check()
      .pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getStorageSpacesLoaded))
      .pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadStorageSpaces());
        }
      }),
      filter(loaded => loaded),
      take(1)
      );
  }

  check(): Observable<boolean> {
    return zip(
      this.store.pipe(select(fromStore.getStorageSpacesLoaded)),
      (
        aStorageSpacesLoaded: boolean,
      ) => {
        let allLoaded = true;
        if (!aStorageSpacesLoaded) {
          this.store.dispatch(new fromStore.LoadStorageSpaces());
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
