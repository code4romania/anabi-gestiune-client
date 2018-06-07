import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

import { AssetsComponent } from './assets.component';
import { AssetDetailComponent } from './components/asset-detail/asset-detail.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.AssetsGuard],
    component: AssetsComponent,
  },
  {
    path: 'detail/:assetId',
    canActivate: [fromGuards.AssetsGuard, fromGuards.AssetDetailGuard],
    component: AssetDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AssetsRoutingModule {}
