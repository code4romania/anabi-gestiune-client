import { Component, OnInit } from '@angular/core';

import {
  CategoriesApiService,
  CountiesApiService,
  DecisionsApiService,
  Dictionary,
  InstitutionsApiService,
  RecoveryBeneficiariesApiService,
  StagesApiService,
  StorageSpacesApiService
} from '@app/core';

@Component({
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss'],
})

export class DictionariesComponent implements OnInit {
  activeDictionary: Dictionary;
  dictionaries: Dictionary[];

  // region actions
  setActiveDictionary(dictionary) {
    this.activeDictionary = dictionary;

    this.activeDictionary
      .config
      .dataService
      .list()
      .subscribe(data => this.activeDictionary.data = data);
  }

  // endregion

  // region init
  constructor(
    private categoriesApiService: CategoriesApiService,
    private countiesApiService: CountiesApiService,
    private decisionsApiService: DecisionsApiService,
    private institutionsApiService: InstitutionsApiService,
    private stagesApiService: StagesApiService,
    private storageSpacesApiService: StorageSpacesApiService,
    private recoveryBeneficiariesApiService: RecoveryBeneficiariesApiService
  ) {
    this.dictionaries = [
      new Dictionary(1, 'Categories', { dataService: this.categoriesApiService }),
      new Dictionary(2, 'Storage Spaces', { dataService: this.storageSpacesApiService }),
      new Dictionary(3, 'Counties', { dataService: this.countiesApiService }),
      new Dictionary(4, 'Institutions', { dataService: this.institutionsApiService }),
      new Dictionary(5, 'Stages', { dataService: this.stagesApiService }),
      new Dictionary(6, 'Decisions', { dataService: this.decisionsApiService }),
      new Dictionary(7, 'Recovery Beneficiaries', { dataService: this.recoveryBeneficiariesApiService }),
    ];
  }

  ngOnInit() {

  }

  // endregion
}
