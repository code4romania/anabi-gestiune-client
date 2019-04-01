import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.StorageSpacesGuard],
    component: fromContainers.StorageSpacesComponent,
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
export class StorageSpacesRoutingModule {}
