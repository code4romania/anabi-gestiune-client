import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Asset} from 'shared/models/asset.model';

@Injectable()
export class AssetsHttp {
  constructor(private http: HttpClient) { }

  public details(id): Observable<Asset> {
    return this.http
      .get(environment.api_url + '/assets/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public create(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${environment.api_url}/assets/addminimalasset`, asset)
  }
}
