import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

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
    ...fromServices.services,
    ...fromGuards.guards,
  ],
})
export class AdminModule {}
