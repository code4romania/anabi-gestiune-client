import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AssetsHttp} from 'shared/http/assets.http'

import {Asset} from 'shared/models/Asset.model';

@Component({
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  providers: [AssetsHttp]
})

export class AssetComponent implements OnInit {
  asset: Asset;

  // region actions
  // endregion

  // region init
  constructor(
    private route: ActivatedRoute,
    private _assetsHttp: AssetsHttp
  ) {

  }

  ngOnInit() {
    this._assetsHttp
      .details(this.route.snapshot.params['id'])
      .subscribe(data => this.asset = data);
  }
  // endregion
}
