import { AssetDetailGuard } from './asset-detail.guard';
import { AssetsGuard } from './assets.guard';
import { LoadDefendantsGuard } from './load-defendants.guard';

export const guards: any[] = [
  AssetsGuard,
  AssetDetailGuard,
  LoadDefendantsGuard,
];

export * from './assets.guard';
export * from './asset-detail.guard';
export * from './load-defendants.guard';
