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
  selector: 'app-storage-spaces-anabi-delete',
  templateUrl: './storage-spaces-anabi-delete.component.html',
  styleUrls: ['./storage-spaces-anabi.css']
})
export class StorageSpacesAnabiDeleteComponent {

  message: String;
  constructor(private storageSpacesService: StorageSpacesAnabiService, private countiesHttp: CountiesHttp, private route: ActivatedRoute) {
     this.route.params.subscribe((params) => {
      this.storageSpacesService.delete(params['id']).subscribe( (value) => this.message = value, (error) => this.message = error);
    });

  }

}
