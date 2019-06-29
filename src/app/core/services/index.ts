import { AddressesService } from './addresses.service';
import { AssetsService } from './assets.service';
import { CategoriesService } from './categories.service';
import { CountiesService } from './counties.service';
import { CrimeTypesService } from './crime-types.service';
import { DecisionsService } from './decisions.service';
import { DefendantsService } from './defendants.service';
import { IdentifiersService } from './identifiers.service';
import { InstitutionsService } from './institutions.service';
import { NotificationService } from './notification.service';
import { PrecautionaryMeasuresService } from './precautionary-measures.service';
import { RecoveryBeneficiariesService } from './recovery-beneficiaries.service';
import { SolutionsService } from './solutions.service';
import { StorageSpacesService } from './storage-spaces.service';

export const services: any[] = [
  AddressesService,
  AssetsService,
  CategoriesService,
  CountiesService,
  CrimeTypesService,
  DecisionsService,
  DefendantsService,
  IdentifiersService,
  InstitutionsService,
  NotificationService,
  PrecautionaryMeasuresService,
  RecoveryBeneficiariesService,
  SolutionsService,
  StorageSpacesService,
];

export * from './addresses.service';
export * from './assets.service';
export * from './categories.service';
export * from './counties.service';
export * from './crime-types.service';
export * from './decisions.service';
export * from './defendants.service';
export * from './identifiers.service';
export * from './institutions.service';
export * from './notification.service';
export * from './precautionary-measures.service';
export * from './recovery-beneficiaries.service';
export * from './solutions.service';
export * from './storage-spaces.service';
