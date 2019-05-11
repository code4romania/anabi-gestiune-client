import { AssetDetailGuard } from './asset-detail.guard';
import { AssetsGuard } from './assets.guard';
import { LoadAddressesGuard } from './load-addresses.guard';
import { LoadCountiesGuard } from './load-counties.guard';
import { LoadDefendantsGuard } from './load-defendants.guard';

export const guards: any[] = [
  AssetsGuard,
  AssetDetailGuard,
  LoadAddressesGuard,
  LoadCountiesGuard,
  LoadDefendantsGuard,
];

export * from './assets.guard';
export * from './asset-detail.guard';
export * from './load-addresses.guard';
export * from './load-counties.guard';
export * from './load-defendants.guard';
