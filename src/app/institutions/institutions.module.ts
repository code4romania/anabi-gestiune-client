import { CommonModule } from '@angular/common';

// modules
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { InstitutionsRoutingModule } from './institutions-routing.module';

// guards
import * as fromGuards from './guards';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    InstitutionsRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class InstitutionsModule { }
