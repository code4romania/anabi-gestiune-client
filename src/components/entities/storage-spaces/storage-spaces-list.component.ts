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
  storageSpaces: StorageSpace[];

  displayedColumns = ['name', 'street', 'city',  'building', 'stair', 'county', 'floor', 'flatNo', 'controls'];

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
        this.storageSpaces = res;
        this.dataSource.data = this.storageSpaces;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */


  ngOnDestroy() {
  }

  trackId(index: number, item: StorageSpace) {
    return item.id;
  }

  registerChangeInStorageSpaces() {
  }

  editStorage(element: StorageSpace) {
    console.log(element.id + 'seected');
  }

  private onError(error) {
    console.error(error);
  }


}
