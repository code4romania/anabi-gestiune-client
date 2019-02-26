import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.AssetsGuard],
    component: fromContainers.AssetsComponent,
  },
  {
    path: 'detail/:assetId',
    canActivate: [fromGuards.AssetsGuard, fromGuards.AssetDetailGuard],
    component: fromContainers.AssetDetailComponent,
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
