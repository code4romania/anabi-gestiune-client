import { AssetsEffects } from './assets.effect';
import { CategoriesEffects } from './categories.effect';
import { DecisionsEffects } from './decisions.effect';
import { InstitutionsEffects } from './institutions.effect';
import { PrecautionaryMeasuresEffects } from './precautionary-measures.effect';
import { RecoveryBeneficiariesEffects } from './recovery-beneficiaries.effect';
import { SolutionsEffects } from './solutions.effect';
import { StagesEffects } from './stages.effect';

export const effects: any[] = [
  AssetsEffects,
  CategoriesEffects,
  DecisionsEffects,
  InstitutionsEffects,
  PrecautionaryMeasuresEffects,
  RecoveryBeneficiariesEffects,
  SolutionsEffects,
  StagesEffects,
];

export * from './assets.effect';
export * from './categories.effect';
export * from './decisions.effect';
export * from './institutions.effect';
export * from './precautionary-measures.effect';
export * from './recovery-beneficiaries.effect';
export * from './solutions.effect';
export * from './stages.effect';
