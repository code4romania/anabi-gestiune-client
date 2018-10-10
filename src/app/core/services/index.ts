import { AssetsService } from './assets.service';
import { CategoriesService } from './categories.service';
import { DecisionsService } from './decisions.service';
import { InstitutionsService } from './institutions.service';
import { NotificationService } from './notification.service';
import { RecoveryBeneficiariesService } from './recovery-beneficiaries.service';
import { SolutionsService } from './solutions.service';

export const services: any[] = [
  AssetsService,
  CategoriesService,
  DecisionsService,
  InstitutionsService,
  NotificationService,
  RecoveryBeneficiariesService,
  SolutionsService,
];

export * from './assets.service';
export * from './categories.service';
export * from './decisions.service';
export * from './institutions.service';
export * from './notification.service';
export * from './recovery-beneficiaries.service';
export * from './solutions.service';
