import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './core/store';

@Component({
  templateUrl: './app.component.html',
  styleUrls: [],
})

export class AppComponent implements OnInit {
  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCategories());
  }
}
