import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// services
import { AdminGuardService } from './services/admin-guard.service';

// components
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [
    AdminGuardService,
  ],
})
export class AdminModule {}
