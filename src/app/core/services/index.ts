import { AssetsService } from './assets.service';
import { CategoriesService } from './categories.service';
import { NotificationService } from './notification.service';
import { RecoveryBeneficiariesService } from './recovery-beneficiaries.service';

export const services: any[] = [
  AssetsService,
  CategoriesService,
  NotificationService,
  RecoveryBeneficiariesService,
];

export * from './assets.service';
export * from './categories.service';
export * from './notification.service';
export * from './recovery-beneficiaries.service';
