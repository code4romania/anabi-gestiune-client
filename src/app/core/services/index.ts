import { AssetsService } from './assets.service';
import { CategoriesService } from './categories.service';
import { NotificationService } from './notification.service';

export const services: any[] = [
  AssetsService,
  CategoriesService,
  NotificationService,
];

export * from './notification.service';
export * from './assets.service';
export * from './categories.service';
