import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import {StorageSpacesAnabiService} from './storage-spaces-anabi.service';
import {FormControl} from '@angular/forms';
import {County} from '../../../shared/models/county.model';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {Address} from '../../../shared/models/address.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'jhi-storage-spaces-anabi-add',
  templateUrl: './storage-spaces-anabi-add.component.html',
  styleUrls: ['./storage-spaces-anabi.css']
})
export class StorageSpacesAnabiAddComponent implements OnInit {

  isSaving: boolean;
  counties: County[];
  tipControl = new FormControl();
  storageSpace: StorageSpace;

  disponibilGroups = [
    {
      name: 'Disponibil',
      disponibil: [{value: 'contractat', viewValue: 'Contractat'}]
    },
    {
      name: 'Disponibil',
      disponibil: [{value: 'necontractat', viewValue: 'Necontractat'}]
    },
    {
      name: 'Terti',
      disabled: false,
      disponibil: [
        {value: 'inculpat', viewValue: 'Inculpat'},
        {value: 'institutie', viewValue: 'Institutie'},
        {value: 'agent privat', viewValue: 'Agent privat'}
      ]
    }
  ];

  constructor(private storageSpacesService: StorageSpacesAnabiService, private  countiesHttp: CountiesHttp) {
  }

  loadAll() {
    this.countiesHttp.list().subscribe(
      (res: County []) => {
        this.counties = res;
      }
    );
  }

  ngOnInit() {
    this.isSaving = false;
    this.loadAll();
    this.storageSpace = new StorageSpace(0, new Address(), '');
    this.storageSpace.address.street = '';
    this.storageSpace.address.building = null;
    this.storageSpace.address.stair = null;
    this.storageSpace.address.flatNo = null;
    this.storageSpace.address.city = null;
    this.storageSpace.address.county = null;
    this.storageSpace.tip = null;
  }

  clear() {
    this.storageSpace = StorageSpace.empty();
  }

  save() {
    this.isSaving = true;
      this.subscribeToSaveResponse(
        this.storageSpacesService.create(this.storageSpace));
  }

  private subscribeToSaveResponse(result: Observable<StorageSpace>) {
    result.subscribe((res: StorageSpace) =>
      this.onSaveSuccess(res), (res: Response) => this.onSaveError());
  }

  private onSaveSuccess(result: StorageSpace) {
  }

  private onSaveError() {
    this.isSaving = false;
  }
}