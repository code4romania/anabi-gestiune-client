import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from './assets.component';
import { AssetDetailComponent } from './components/asset-detail/asset-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
  },
  {
    path: 'detail',
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
