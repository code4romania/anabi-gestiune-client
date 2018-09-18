import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset, Solution } from 'app/core';
import { AssetProperty } from '../../../core/store/actions/asset-properties.action';

import { Store } from '@ngrx/store';
import * as fromStore from 'app/core/store';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

export enum AssetProperties {
  SOLUTIE = 'solutie',
  INCULPAT = 'inculpat',
}

@Component({
  templateUrl: 'asset-detail.component.html',
  styleUrls: ['asset-detail.component.scss'],
})

export class AssetDetailComponent implements OnInit {
  private asset$: Observable<Asset>;
  private assetProperty$: Observable<fromStore.AssetProperty>;

  properties = [
    { name: 'Solutie', value: AssetProperties.SOLUTIE },
    { name: 'Inculpat', value: AssetProperties.INCULPAT },
  ];
  selectedProperty: string;

  constructor(
    private store: Store<fromStore.CoreState>,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((aParams: any) => {
      const theId = aParams.assetId;

      this.asset$ = this.store.select(fromStore.getAssetById(theId));
      this.assetProperty$ = this.store.select(fromStore.getAssetPropertiesByAssetId(theId));
    });
  }

  isEditing$(): Observable<boolean> {
    return combineLatest(
        this.asset$,
        this.assetProperty$,
        (aAsset, aAssetProperty) => aAsset !== undefined && aAssetProperty !== undefined
      );
  }

  addProperty() {
    switch (this.selectedProperty) {
      case AssetProperties.SOLUTIE: {
        this.asset$.subscribe((aAsset: Asset) => {
          const theSolution = new Solution();
          theSolution.setAsset(aAsset);
          this.store.dispatch(new fromStore.UpdateProperty(theSolution));
        });
        break;
      }
    }

    this.resetSelectedProperty();
  }

  onPropertyUpdate(aProperty: AssetProperty) {
    this.store.dispatch(new fromStore.UpdateProperty(aProperty));
  }

  private resetSelectedProperty() {
    this.selectedProperty = undefined;
  }
}
