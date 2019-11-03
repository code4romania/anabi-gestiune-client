import { AddressesEffect } from './addresses.effect';
import { AssetPropertiesEffects } from './asset-properties.effect';
import { AssetsEffects } from './assets.effect';
import { CategoriesEffects } from './categories.effect';
import { CountiesEffects } from './counties.effect';
import { CrimeTypesEffects } from './crime-types.effect';
import { DecisionsEffects } from './decisions.effect';
import { DefendantsEffects } from './defendants.effect';
import { IdentifiersEffects } from './identifiers.effect';
import { InstitutionsEffects } from './institutions.effect';
import { OwnersEffects } from './owner.effects';
import { PrecautionaryMeasuresEffects } from './precautionary-measures.effect';
import { RecoveryBeneficiariesEffects } from './recovery-beneficiaries.effect';
import { SolutionsEffects } from './solutions.effect';
import { StagesEffects } from './stages.effect';
import { StorageSpacesEffects } from './storage-spaces.effect';

export const effects: any[] = [
  AddressesEffect,
  AssetPropertiesEffects,
  AssetsEffects,
  CategoriesEffects,
  CountiesEffects,
  CrimeTypesEffects,
  DecisionsEffects,
  DefendantsEffects,
  IdentifiersEffects,
  InstitutionsEffects,
  PrecautionaryMeasuresEffects,
  RecoveryBeneficiariesEffects,
  SolutionsEffects,
  StagesEffects,
  StorageSpacesEffects,
  OwnersEffects,
];

export * from './addresses.effect';
export * from './asset-properties.effect';
export * from './assets.effect';
export * from './categories.effect';
export * from './counties.effect';
export * from './crime-types.effect';
export * from './decisions.effect';
export * from './identifiers.effect';
export * from './institutions.effect';
export * from './precautionary-measures.effect';
export * from './recovery-beneficiaries.effect';
export * from './solutions.effect';
export * from './stages.effect';
export * from './storage-spaces.effect';
export * from './owner.effects';
