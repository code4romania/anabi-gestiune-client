export class AssetCurrency {
  id: string;
  code: string;

  constructor(assetCategory: AssetCurrency = {} as AssetCurrency) {
    this.id = assetCategory.id;
    this.code = assetCategory.code;
  }
}
