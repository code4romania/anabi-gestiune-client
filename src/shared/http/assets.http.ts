import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Asset} from 'shared/models/Asset.model';
import {AssetCategory} from 'shared/models/AssetCategory.model';
import {AssetSubcategory} from 'shared/models/AssetSubcategory.model';
import {AssetStage} from 'shared/models/AssetStage.model';

@Injectable()
export class AssetsHttp {
  constructor(private http: HttpClient) {
  }

  public categories(): Observable<Array<AssetCategory>> {
    return this.http.get(environment.api_url + '/assets/parentcategories')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public subcategories(categoryId): Observable<Array<AssetSubcategory>> {
    return this.http.get(environment.api_url + '/assets/subcategories/' + categoryId)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public stages(): Observable<Array<AssetStage>> {
    return this.http.get(environment.api_url + '/assets/stages')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public details(id): Observable<Asset> {
    return this.http
      .get(environment.api_url + '/assets/' + id)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public create(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${environment.api_url}/assets/addminimalasset`, asset);
  }
}
