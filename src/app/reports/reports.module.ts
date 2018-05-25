import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';

// components
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule,
  ],
  declarations: [
    ReportsComponent,
  ],
  providers: [],
})
export class ReportsModule {}
