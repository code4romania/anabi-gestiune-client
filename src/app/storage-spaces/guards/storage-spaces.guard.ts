import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class StorageSpacesGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) { }

  canActivate(): Observable<boolean> {
    return this.hasStorageSpacesLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  hasStorageSpacesLoaded(): Observable<boolean> {
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
}
