import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})
export class HomeModule {}
