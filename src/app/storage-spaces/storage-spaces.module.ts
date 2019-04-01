import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { StorageSpacesRoutingModule } from './storage-spaces-routing.module';
import { CommonModule } from '@angular/common';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

@NgModule({  
  imports: [
    CommonModule,
    SharedModule,
    StorageSpacesRoutingModule,
  ],
  declarations: [
    ...fromContainers.components
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class StorageSpacesModule { }
