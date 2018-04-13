import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {Asset} from 'shared/models/Asset.model';
import {AssetCategory} from 'shared/models/AssetCategory.model';
import {AssetSubcategory} from 'shared/models/AssetSubcategory.model';
import {AssetStage} from 'shared/models/AssetStage.model';
import {AssetMeasurement} from 'shared/models/AssetMeasurement.model';
import {AssetCurrency} from 'shared/models/AssetCurrency.model';

@Injectable()
export class AssetsHttp {
  constructor(private http: HttpClient) {
  }

  public categories(): Observable<Array<AssetCategory>> {
    return this.http.get(environment.api_url + '/assets/parentcategories')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public subcategories(categoryId): Observable<Array<AssetSubcategory>> {
    return this.http.get(environment.api_url + '/assets/subcategories/' + categoryId)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public stages(): Observable<Array<AssetStage>> {
    return this.http.get(environment.api_url + '/assets/stages')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public measurements(): Observable<Array<AssetMeasurement>> {
    const measurements = [
      new AssetMeasurement({id: 'buc', code: 'Bucati'}),
      new AssetMeasurement({id: 'kg', code: 'Kilograme'}),
      new AssetMeasurement({id: 'l', code: 'Litri'}),
    ];

    return Observable.create(observer => {
      observer.next(measurements);
    });
  }

  public currencies(): Observable<Array<AssetCurrency>> {
    const currencies = [
      new AssetCurrency({id: 'ron', code: 'RON'}),
      new AssetCurrency({id: 'eur', code: 'EUR'}),
      new AssetCurrency({id: 'usd', code: 'USD'}),
    ];

    return Observable.create(observer => {
      observer.next(currencies);
    });
  }

  public list(): Observable<Array<Asset>> {
    return this.http
      .get(environment.api_url + '/assets')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public details(id): Observable<Asset> {
    return this.http
      .get(environment.api_url + '/assets/' + id)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }

  public create(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${environment.api_url}/assets/addminimalasset`, asset)
      .catch((error: any) => Observable.throw(error.error.errors));
  }
}
