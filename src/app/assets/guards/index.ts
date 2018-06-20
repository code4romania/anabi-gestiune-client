import { AssetDetailGuard } from './asset-detail.guard';
import { AssetsGuard } from './assets.guard';

export const guards: any[] = [AssetsGuard, AssetDetailGuard];

export * from './assets.guard';
export * from './asset-detail.guard';
