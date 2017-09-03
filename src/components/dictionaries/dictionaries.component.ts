import {Component, OnInit} from '@angular/core';

import {CategoriesHttp} from 'shared/http/categories.http';
import {StorageSpacesHttp} from 'shared/http/storageSpaces.http';
import {CountiesHttp} from 'shared/http/counties.http';
import {InstitutionsHttp} from 'shared/http/institutions.http';
import {StagesHttp} from 'shared/http/stages.http';
import {DecisionsHttp} from 'shared/http/decisions.http';
import {RecoveryBeneficiariesHttp} from 'shared/http/recoveryBeneficiaries.http';

import {Dictionary} from 'shared/models/dictionary.model';

@Component({
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.css'],
  providers: [CategoriesHttp, StorageSpacesHttp, CountiesHttp, InstitutionsHttp, StagesHttp, DecisionsHttp, RecoveryBeneficiariesHttp]
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
    private _categoriesHttp: CategoriesHttp,
    private _storageSpacesHttp: StorageSpacesHttp,
    private _countiesHttp: CountiesHttp,
    private _institutionsHttp: InstitutionsHttp,
    private _stagesHttp: StagesHttp,
    private _decisionsHttp: DecisionsHttp,
    private _recoveryBeneficiariesHttp: RecoveryBeneficiariesHttp
  ) {
    this.dictionaries = [
      new Dictionary(1, 'Categories', {dataService: _categoriesHttp}),
      new Dictionary(2, 'Storage Spaces', {dataService: _storageSpacesHttp}),
      new Dictionary(3, 'Counties', {dataService: _countiesHttp}),
      new Dictionary(4, 'Institutions', {dataService: _institutionsHttp}),
      new Dictionary(5, 'Stages', {dataService: _stagesHttp}),
      new Dictionary(6, 'Decisions', {dataService: _decisionsHttp}),
      new Dictionary(7, 'Recovery Beneficiaries', {dataService: _recoveryBeneficiariesHttp}),
    ];
  }

  ngOnInit() {

  }

  // endregion
}
