import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

// components
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule,
  ],
  declarations: [
    SearchComponent,
  ],
  providers: [],
})
export class SearchModule {}
