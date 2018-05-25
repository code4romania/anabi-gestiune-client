import { CommonModule } from '@angular/common';
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
  imports: [
    CommonModule,
  ],
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
