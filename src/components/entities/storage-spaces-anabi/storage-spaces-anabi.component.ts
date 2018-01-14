import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Rx';


import {StorageSpacesAnabi} from './storage-spaces-anabi.model';
import {StorageSpacesAnabiService} from './storage-spaces-anabi.service';
import {ResponseWrapper} from '../model/response-wrapper.model';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'jhi-storage-spaces-anabi',
  templateUrl: './storage-spaces-anabi.component.html',
  styleUrls: ['storage-spaces-anabi.css']
})
export class StorageSpacesAnabiComponent implements AfterViewInit, OnDestroy {
  storageSpaces: StorageSpacesAnabi[];


  displayedColumns = ['name', 'street', 'city', 'building', 'stair', 'floor', 'flatNo'];

  dataSource = new MatTableDataSource();
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.loadAll();
    this.registerChangeInStorageSpaces();
  }


  constructor(private storageSpacesService: StorageSpacesAnabiService) {}

  loadAll() {
    this.storageSpacesService.query().subscribe(
      (res: ResponseWrapper) => {
        this.storageSpaces = res.json;
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

  trackId(index: number, item: StorageSpacesAnabi) {
    return item.id;
  }

  registerChangeInStorageSpaces() {
  }

  private onError(error) {
  }


}
