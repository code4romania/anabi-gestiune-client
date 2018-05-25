import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Asset, AssetsApiService } from 'core';

@Component({
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
})

export class AssetComponent implements OnInit {
  asset: Asset;

  // region actions
  // endregion

  // region init
  constructor(
    private route: ActivatedRoute,
    private assetsApiService: AssetsApiService
  ) {

  }

  ngOnInit() {
    this.assetsApiService
      .details(this.route.snapshot.params['id'])
      .subscribe(data => this.asset = data);
  }
  // endregion
}
