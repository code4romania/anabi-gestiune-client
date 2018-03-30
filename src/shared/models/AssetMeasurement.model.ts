export class AssetMeasurement {
  id: string;
  code: string;

  constructor(assetCategory: AssetMeasurement = {} as AssetMeasurement) {
    this.id = assetCategory.id;
    this.code = assetCategory.code;
  }
}
