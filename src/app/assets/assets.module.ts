import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { AssetsRoutingModule } from './assets-routing.module';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';
import { ViewAddressComponent } from './components/view-address/view-address.component';

@NgModule({
  imports: [
    SharedModule,
    AssetsRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  entryComponents: [
    ...fromContainers.entryComponents,
  ],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards,
  ],
})
export class AssetsModule {}
