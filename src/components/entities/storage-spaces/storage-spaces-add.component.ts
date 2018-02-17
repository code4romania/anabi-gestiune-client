import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import {StorageSpacesService} from './storage-spaces.service';
import {FormControl} from '@angular/forms';
import {County} from '../../../shared/models/county.model';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {storageSpacesRoute} from './storage-spaces.route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-storage-spaces-add',
  templateUrl: './storage-spaces-add.component.html',
  styleUrls: ['./storage-spaces.css']
})
export class StorageSpacesAddComponent implements OnInit {

  message: String = null;
  error: boolean = false;
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

  constructor(private storageSpacesService: StorageSpacesService, private  countiesHttp: CountiesHttp, private router: Router) {
  }r

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
    this.storageSpace = new StorageSpace();
    this.storageSpace.address.street = '';
    this.storageSpace.address.building = null;
    this.storageSpace.address.stair = null;
    this.storageSpace.address.flatNo = null;
    this.storageSpace.address.city = null;
    this.storageSpace.address.county = null;
    this.storageSpace.tip = null;
  }

  clear() {
    this.storageSpace = new StorageSpace();
  }

  save() {
    this.isSaving = true;
    this.storageSpacesService.create(this.storageSpace)
      .subscribe((res: StorageSpace) => this.onSaveSuccess(res),
        (error) => {
          this.error = true;
          this.message = error.error
        });
  }

  private onSaveSuccess(result: StorageSpace) {
    this.router.navigate(['storage-spaces-list']);
  }

  private onSaveError() {
    this.isSaving = false;
  }
}
