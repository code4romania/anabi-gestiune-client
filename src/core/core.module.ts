import { NgModule } from '@angular/core';
import { NotificationService } from './services/notification.service';

import {
  AssetsApiService,
  CategoriesApiService,
  CountiesApiService,
  DecisionsApiService,
  InstitutionsApiService,
  RecoveryBeneficiariesApiService,
  StagesApiService,
  StorageSpacesApiService
} from './http';

@NgModule({
  imports: [],
  providers: [
    NotificationService,
    // http services
    AssetsApiService,
    CategoriesApiService,
    CountiesApiService,
    DecisionsApiService,
    InstitutionsApiService,
    RecoveryBeneficiariesApiService,
    StagesApiService,
    StorageSpacesApiService,
  ],
})
export class CoreModule {}
