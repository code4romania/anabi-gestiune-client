import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {StorageSpace} from 'shared/models/storageSpace.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StorageSpacesHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<StorageSpace[]> {
    return this.http
      .get(environment.api_url + '/storageSpaces')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
