import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import * as fromGuards from './guards';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.LoadInstitutionsGuard],
    component: fromContainers.InstitutionsComponent,
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
export class InstitutionsRoutingModule {}
