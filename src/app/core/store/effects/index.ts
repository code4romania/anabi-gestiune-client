import { AssetsEffects } from './assets.effect';
import { CategoriesEffects } from './categories.effect';
import { RecoveryBeneficiariesEffects } from './recovery-beneficiaries.effect';
import { StagesEffects } from './stages.effect';

export const effects: any[] = [
  AssetsEffects,
  CategoriesEffects,
  RecoveryBeneficiariesEffects,
  StagesEffects,
];

export * from './assets.effect';
export * from './categories.effect';
export * from './recovery-beneficiaries.effect';
export * from './stages.effect';
