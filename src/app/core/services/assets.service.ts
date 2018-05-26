import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AssetsApiService } from '../http';
import { Asset } from '../models';

@Injectable()
export class AssetsService {
  constructor(private assetsApiService: AssetsApiService) {
  }

  public list(): Observable<Asset[]> {
    return this.assetsApiService.list()
      .pipe(
        map((aResponse: object[]) => aResponse.map(aAsset => new Asset(aAsset)))
      );
  }
}
