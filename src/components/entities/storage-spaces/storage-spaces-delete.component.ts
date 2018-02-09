import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StorageSpacesService} from './storage-spaces.service';
import {CountiesHttp} from '../../../shared/http/counties.http';

@Component({
  selector: 'app-storage-spaces-anabi-delete',
  templateUrl: './storage-spaces-delete.component.html',
  styleUrls: ['./storage-spaces.css']
})
export class StorageSpacesAnabiDeleteComponent {

  message: any;
  constructor(private storageSpacesService: StorageSpacesService, private countiesHttp: CountiesHttp, private route: ActivatedRoute) {
     this.route.params.subscribe((params) => {
      this.storageSpacesService.delete(params['id']).subscribe( (value) => this.message = value, (error) => this.message = error);
    });

  }

}
