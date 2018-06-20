import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from './core/store';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  private showIsLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.CoreState>) {
  }

  ngOnInit() {
    this.showIsLoading$ = this.store.select(fromStore.getIsLoading);
  }
}
