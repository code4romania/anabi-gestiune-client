import { AddressesApiService } from './addresses-api.service';
import { AssetsApiService } from './assets-api.service';
import { CategoriesApiService } from './categories-api.service';
import { CountiesApiService } from './counties-api.service';
import { CrimeTypesApiService } from './crime-types-api.service';
import { DecisionsApiService } from './decisions-api.service';
import { DefendantsApiService } from './defendants-api.service';
import { IdentifiersApiService } from './identifiers-api.service';
import { InstitutionsApiService } from './institutions-api.service';
import { PrecautionaryMeasuresApiService } from './precautionary-measures-api.service';
import { RecoveryBeneficiariesApiService } from './recovery-beneficiaries-api.service';
import { SolutionsApiService } from './solutions-api.service';
import { StagesApiService } from './stages-api.service';
import { StorageSpacesApiService } from './storage-spaces-api.service';

export const httpServices: any[] = [
  AddressesApiService,
  AssetsApiService,
  CategoriesApiService,
  CountiesApiService,
  CrimeTypesApiService,
  DecisionsApiService,
  DefendantsApiService,
  IdentifiersApiService,
  InstitutionsApiService,
  PrecautionaryMeasuresApiService,
  RecoveryBeneficiariesApiService,
  SolutionsApiService,
  StagesApiService,
  StorageSpacesApiService,
];

export * from './addresses-api.service';
export * from './assets-api.service';
export * from './categories-api.service';
export * from './counties-api.service';
export * from './crime-types-api.service';
export * from './decisions-api.service';
export * from './defendants-api.service';
export * from './identifiers-api.service';
export * from './institutions-api.service';
export * from './precautionary-measures-api.service';
export * from './recovery-beneficiaries-api.service';
export * from './solutions-api.service';
export * from './stages-api.service';
export * from './storage-spaces-api.service';
