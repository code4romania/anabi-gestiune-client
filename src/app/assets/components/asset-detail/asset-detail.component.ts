import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'app/core';

import { Store } from '@ngrx/store';
import * as fromStore from 'app/core/store';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'asset-detail.component.html',
  styleUrls: ['asset-detail.component.scss'],
})

export class AssetDetailComponent implements OnInit {
  private asset$: Observable<Asset>;

  constructor(
    private store: Store<fromStore.CoreState>,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((aParams: any) => {
      const theId = aParams.assetId;

      this.asset$ = this.store.select(fromStore.getAssetById(theId));
    });
  }
}
