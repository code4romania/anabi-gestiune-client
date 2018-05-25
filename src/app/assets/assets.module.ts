import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { AssetsRoutingModule } from './assets-routing.module';

// components
import { AssetsComponent } from './assets.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';

@NgModule({
  imports: [
    SharedModule,
    AssetsRoutingModule,
  ],
  declarations: [
    AssetsComponent,
    AddAssetComponent,
  ],
  entryComponents: [
    AddAssetComponent,
  ],
})
export class AssetsModule {}
