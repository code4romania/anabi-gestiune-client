import { Component, Input } from '@angular/core';
import { Asset } from 'app/core';

@Component({
  templateUrl: 'asset-detail.component.html',
  styleUrls: ['asset-detail.component.scss'],
})

export class AssetDetailComponent {
  @Input() asset: Asset;
}
