import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class SearchModule {}
