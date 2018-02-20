import {Component, OnDestroy, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import {StorageSpacesService} from './storage-spaces.service';
import {FormControl} from '@angular/forms';
import {County} from '../../../shared/models/county.model';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {storageSpacesRoute} from './storage-spaces.route';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-storage-spaces-add',
  templateUrl: './storage-spaces-add.component.html',
  styleUrls: ['./storage-spaces.css']
})
export class StorageSpacesAddComponent implements OnInit, OnDestroy {

  message: String = null;
  error: boolean = false;
  isSaving: boolean;
  counties: County[];
  tipControl = new FormControl();
  storageSpace: StorageSpace;

  disponibilGroups = [
    {
      name: 'Disponibil',
      disponibil: [{value: 1, viewValue: 'Contractat'}]
    },
    {
      name: 'Disponibil',
      disponibil: [{value: 2, viewValue: 'Necontractat'}]
    },
    {
      name: 'Terti',
      disabled: false,
      disponibil: [
        {value: 3, viewValue: 'Inculpat'},
        {value: 4, viewValue: 'Institutie'},
        {value: 5, viewValue: 'Agent privat'}
      ]
    }
  ];

  subscription: Subscription;

  constructor(private storageSpacesService: StorageSpacesService, private  countiesHttp: CountiesHttp, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadAll() {
   this.subscription = this.countiesHttp.list().subscribe(
      (res: County []) => {
        this.counties = res;
      }
    );
  }

  ngOnInit() {
    this.isSaving = false;
    this.loadAll();
    this.storageSpace = new StorageSpace();
    this.storageSpace.tip = null;
  }

  clear() {
    this.storageSpace = new StorageSpace();
    this.router.navigate(['storage-spaces-list']);
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
