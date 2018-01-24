import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Rx';


import {StorageSpacesAnabiService} from './storage-spaces-anabi.service';
import {ResponseWrapper} from '../model/response-wrapper.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {Address} from '../../../shared/models/address.model';
import {County} from '../../../shared/models/county.model';

@Component({
  selector: 'jhi-storage-spaces-anabi',
  templateUrl: './storage-spaces-anabi.component.html',
  styleUrls: ['storage-spaces-anabi.css']
})
export class StorageSpacesAnabiComponent implements AfterViewInit, OnDestroy {
  storageSpaces: StorageSpace[];


  displayedColumns = ['name', 'street', 'city', 'building', 'stair', 'floor', 'flatNo', 'controls'];

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

  trackId(index: number, item: StorageSpace) {
    return item.id;
  }

  registerChangeInStorageSpaces() {
  }

  editStorage(element: StorageSpace) {
    console.log(element.id + 'seected');
  }

  private onError(error) {
    this.dataSource.data = [
      StorageSpace.create(1, 'My storage Space',
        Address.create('Address Name', '1', 'Romania', 'A street', 'Bucharest', 'Building No', 'stairs', 'fllor', '3')
      ),
      StorageSpace.create(2, 'My storage Space 2',
        Address.create('Address Name', '1', 'Romania', 'A street', 'Bucharest', 'Building No', 'stairs', 'fllor', '3')
      )
    ];
    this.storageSpacesService.setCache(this.dataSource.data);
  }


}
