import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class SearchGuard implements CanActivate {
  constructor(private store: Store<fromStore.AssetState>) { }

  canActivate(): Observable<boolean> {
    return this.hasSearchLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  hasSearchLoaded(): Observable<boolean> {
    return this.store.pipe(select(fromStore.DecisionState))
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadSearchDecisions());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }
}
