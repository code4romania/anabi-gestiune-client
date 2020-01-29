// modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';
import { AddStorageSpaceComponent } from './containers/add-storage-space/add-storage-space.component';
// guards
import * as fromGuards from './guards';
import { StorageSpacesRoutingModule } from './storage-spaces-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StorageSpacesRoutingModule,
  ],
  declarations: [
    [...fromContainers.components],
    AddStorageSpaceComponent,
  ],
  entryComponents: [
    ...fromContainers.entryComponents,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class StorageSpacesModule { }
