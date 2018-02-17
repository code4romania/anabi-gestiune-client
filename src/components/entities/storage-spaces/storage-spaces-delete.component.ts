import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageSpacesService} from './storage-spaces.service';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import Any = jasmine.Any;

@Component({
  selector: 'app-storage-spaces-delete',
  templateUrl: './storage-spaces-delete.component.html',
  styleUrls: ['./storage-spaces.css']
})
export class StorageSpacesDeleteComponent {

  message: any;
  constructor(private storageSpacesService: StorageSpacesService, private countiesHttp: CountiesHttp, private route: ActivatedRoute,
  private router: Router) {
     this.route.params.subscribe((params) => {
      this.storageSpacesService.delete(params['id'])
        .subscribe( (value) => this.onSaveSuccess(value),
          (error) => this.message = error.error);
    });
  }

  private onSaveSuccess(result: Any) {
    this.router.navigate(['storage-spaces-list']);
  }

}
