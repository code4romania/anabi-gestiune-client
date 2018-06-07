import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.AdminGuard],
    component: AdminComponent,
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
export class AdminRoutingModule {}
