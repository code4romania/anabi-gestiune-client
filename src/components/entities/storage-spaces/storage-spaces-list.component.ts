import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Rx';


import {StorageSpacesService} from './storage-spaces.service';
import {ResponseWrapper} from '../model/response-wrapper.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {Address} from '../../../shared/models/address.model';
import {County} from '../../../shared/models/county.model';

@Component({
  selector: 'app-storage-spaces',
  templateUrl: './storage-spaces-list.component.html',
  styleUrls: ['storage-spaces.css']
})

export class StorageSpacesListComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['name', 'description', 'street', 'city',  'building', 'stair', 'county', 'floor', 'flatNo', 'totalVolume', 'availableVolume', 'length', 'width',
    'asphaltedArea', 'undevelopedArea',  'monthlyMaintenanceCost', 'maintenanceMentions', 'contactData', 'controls'];

  dataSource = new MatTableDataSource();
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.loadAll();
    this.registerChangeInStorageSpaces();
  }


  constructor(private storageSpacesService: StorageSpacesService) {}

  loadAll() {
    this.storageSpacesService.list().subscribe(
      (res: StorageSpace []) => {
        this.dataSource.data = res;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }
  ngOnDestroy() {
   this.dataSource.data = null;
  }

  registerChangeInStorageSpaces() {
  }

  private onError(error) {
    console.error(error);
  }


}
