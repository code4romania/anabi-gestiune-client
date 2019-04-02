import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class LoadInstitutionsGuard implements CanActivate {
  constructor(private store: Store<fromStore.InstitutionState>) {
  }

  canActivate(): Observable<boolean> {
    return this.hasInstitutionsLoaded()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  hasInstitutionsLoaded(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getInstitutionsLoaded))
      .pipe(
        tap((aLoaded: boolean) => {
          if (!aLoaded) {
            this.store.dispatch(new fromStore.LoadInstitutions());
          }
        }),
        filter((aLoaded: boolean) => aLoaded),
        take(1)
      );
  }
}
