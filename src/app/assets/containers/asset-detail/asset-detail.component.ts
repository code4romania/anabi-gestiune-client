import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Address,
  Asset,
  AssetsService,
  AssetCurrency,
  AssetMeasurement,
  AssetProperty,
  Category,
  County,
  CrimeType,
  Decision,
  Defendant,
  Identifier,
  Institution,
  PrecautionaryMeasure,
  RecoveryBeneficiary,
  Solution,
  Stage,
  StorageSpace
} from '@app/core';
import { map, take } from 'rxjs/operators';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';

import { combineLatest, Observable } from 'rxjs';

export enum AssetProperties {
  SOLUTIE = 'solutie',
  INCULPAT = 'inculpat',
  SPATIU = 'spatiu',
  ADRESA = 'adresa',
}

export enum AssetDetailState {
  View = 'view',
  Edit = 'edit',
}

@Component({
  templateUrl: 'asset-detail.component.html',
  styleUrls: ['asset-detail.component.scss'],
})
export class AssetDetailComponent implements OnInit {
  asset$: Observable<Asset>;

  institutions$: Observable<Institution[]> = this.store.pipe(select(fromStore.getAllInstitutions));
  decisions$: Observable<Decision[]> = this.store.pipe(select(fromStore.getAllDecisions));
  stages$: Observable<Stage[]> = this.store.pipe(select(fromStore.getAllStages));
  precautionaryMeasures$: Observable<PrecautionaryMeasure[]> = this.store.pipe(select(fromStore.getAllPrecautionaryMeasures));
  recoveryBeneficiaries$: Observable<RecoveryBeneficiary[]> = this.store.pipe(select(fromStore.getAllRecoveryBeneficiaries));
  crimeTypes$: Observable<CrimeType[]> = this.store.pipe(select(fromStore.getAllCrimeTypes));
  categories$: Observable<Category[]> = this.store.pipe(select(fromStore.getAssetParentCategories));
  identifiers$: Observable<Identifier[]> = this.store.pipe(select(fromStore.getAllIdentifiers));
  counties$: Observable<County[]> = this.store.pipe(select(fromStore.getAllCounties));

  assetProperty$: Observable<AssetProperty>;
  subcategories$: Observable<Category[]>;
  defendants$: Observable<Defendant[]>;
  addresses$: Observable<Address[]>;

  measurements: AssetMeasurement[];
  currencies: AssetCurrency[];

  private state: AssetDetailState = AssetDetailState.View;

  properties = [
    { name: 'Solutie', value: AssetProperties.SOLUTIE },
    { name: 'Inculpat', value: AssetProperties.INCULPAT },
    { name: 'Spatiu', value: AssetProperties.SPATIU },
    { name: 'Adresa', value: AssetProperties.ADRESA },
  ];
  selectedProperty: string;

  constructor(
    private store: Store<fromStore.CoreState>,
    private route: ActivatedRoute,
    private assetsService: AssetsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((aParams: any) => {
      const theId = aParams.assetId;

      this.asset$ = this.store.pipe(select(fromStore.getAssetById(theId)));
      this.assetProperty$ = this.store.pipe(select(fromStore.getAssetPropertiesByAssetId(theId)));
      this.defendants$ = this.store.pipe(select(fromStore.getAllDefendantsForAssetId(theId)));
      this.addresses$ = this.store.pipe(select(fromStore.getAllAddressesForAssetId(theId)));
    });

    this.asset$.pipe(take(1))
      .subscribe((aAsset: Asset) => this.getSubcategories(aAsset.category.id));

    this.assetsService.measurements()
      .pipe(take(1))
      .subscribe(
        (measurements) => this.measurements = measurements
      );
    this.assetsService.currencies()
      .pipe(take(1))
      .subscribe(
        (currencies) => this.currencies = currencies
      );
  }

  getSubcategories(categoryId) {
    this.subcategories$ = this.store.pipe(select(fromStore.getAssetSubcategories(categoryId)));
  }

  isEditingAssetProperty$(): Observable<boolean> {
    return combineLatest([this.asset$, this.assetProperty$]).pipe(
      map(([aAsset, aAssetProperty]) => aAsset !== undefined && aAssetProperty !== undefined)
    );
  }

  addProperty() {
    this.asset$.pipe(take(1)).subscribe((aAsset: Asset) => {
      switch (this.selectedProperty) {
        case AssetProperties.SOLUTIE: {
          const theSolution = new Solution();
          theSolution.setAsset(aAsset);
          this.store.dispatch(new fromStore.UpdateProperty(theSolution));
          break;
        }

        case AssetProperties.SPATIU: {
          const theSpace = new StorageSpace();
          theSpace.setAsset(aAsset);
          this.store.dispatch(new fromStore.UpdateProperty(theSpace));
          break;
        }

        case AssetProperties.ADRESA: {
          const theAddress = new Address();
          theAddress.setAsset(aAsset);
          this.store.dispatch(new fromStore.UpdateProperty(theAddress));
          break;
        }

        case AssetProperties.INCULPAT: {
          const theDefendant = new Defendant();
          theDefendant.setAsset(aAsset);
          this.store.dispatch(new fromStore.UpdateProperty(theDefendant));
          break;
        }
      }

      this.resetSelectedProperty();
    });
  }

  editAsset() {
    this.setStateEdit();
  }

  onPropertyUpdate(aProperty: AssetProperty) {
    this.store.dispatch(new fromStore.UpdateProperty(aProperty));
  }

  onPropertyCancel(aProperty: AssetProperty) {
    this.store.dispatch(new fromStore.DeleteProperty(aProperty.getAsset().id));
  }

  onPropertySave(aProperty: AssetProperty) {
    this.store.dispatch(new fromStore.CreateProperty(aProperty));
  }

  onEditAsset(aAsset: Asset) {
    this.store.dispatch(new fromStore.UpdateAsset(aAsset));
    this.setStateView();
  }

  onCancelAssetEdit() {
    this.setStateView();
  }

  isDefendantDeleting$(aDefendantId: number) {
    return this.store.pipe(select(fromStore.getDefendantDeletingById(aDefendantId)));
  }

  onDefendantDeleted(aDefendant: Defendant) {
    this.store.dispatch(new fromStore.DeleteDefendant(aDefendant));
  }

  isStateView(): boolean {
    return this.state === AssetDetailState.View;
  }

  isStateEdit(): boolean {
    return this.state === AssetDetailState.Edit;
  }

  private resetSelectedProperty() {
    this.selectedProperty = undefined;
  }

  private setStateEdit() {
    this.state = AssetDetailState.Edit;
  }

  private setStateView() {
    this.state = AssetDetailState.View;
  }
}
