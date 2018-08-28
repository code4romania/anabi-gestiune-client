import { AssetsService } from './assets.service';
import { CategoriesService } from './categories.service';
import { NotificationService } from './notification.service';
import { RecoveryBeneficiariesService } from './recovery-beneficiaries.service';
import { SolutionsService } from './solutions.service';

export const services: any[] = [
  AssetsService,
  CategoriesService,
  NotificationService,
  RecoveryBeneficiariesService,
  SolutionsService,
];

export * from './assets.service';
export * from './categories.service';
export * from './notification.service';
export * from './recovery-beneficiaries.service';
export * from './solutions.service';
