import { AssetsApiService } from './assets-api.service';
import { CategoriesApiService } from './categories-api.service';
import { CountiesApiService } from './counties-api.service';
import { DecisionsApiService } from './decisions-api.service';
import { InstitutionsApiService } from './institutions-api.service';
import { RecoveryBeneficiariesApiService } from './recovery-beneficiaries-api.service';
import { StagesApiService } from './stages-api.service';
import { StorageSpacesApiService } from './storage-spaces-api.service';

export const httpServices: any[] = [
  AssetsApiService,
  CategoriesApiService,
  CountiesApiService,
  DecisionsApiService,
  InstitutionsApiService,
  RecoveryBeneficiariesApiService,
  StagesApiService,
  StorageSpacesApiService,
];

export * from './assets-api.service';
export * from './categories-api.service';
export * from './counties-api.service';
export * from './decisions-api.service';
export * from './institutions-api.service';
export * from './recovery-beneficiaries-api.service';
export * from './stages-api.service';
export * from './storage-spaces-api.service';
