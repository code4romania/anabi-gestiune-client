import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { DictionariesRoutingModule } from './dictionaries-routing.module';

// components
import { DictionariesComponent } from './dictionaries.component';

@NgModule({
  imports: [
    // CommonModule,
    SharedModule,
    DictionariesRoutingModule,
  ],
  declarations: [
    DictionariesComponent,
  ],
  providers: [],
})
export class DictionariesModule {}
