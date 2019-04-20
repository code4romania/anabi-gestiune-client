import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class LoadCountiesGuard implements CanActivate {
  constructor(private store: Store<fromStore.CountyState>) {
  }

  canActivate(): Observable<boolean> {
    return this.hasCountiesLoaded()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasCountiesLoaded(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getCountiesLoaded))
      .pipe(
        tap((aLoaded: boolean) => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadCounties());
          }
        }),
        filter((aLoaded: boolean) => aLoaded),
        take(1)
      );
  }
}
