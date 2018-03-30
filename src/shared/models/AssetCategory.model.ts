export class AssetCategory {
  id: number;
  code: string;
  description: string;

  constructor(assetCategory: AssetCategory = {} as AssetCategory) {
    this.id = assetCategory.id;
    this.code = assetCategory.code;
    this.description = assetCategory.description;
  }
}
