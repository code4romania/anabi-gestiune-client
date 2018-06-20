export class AssetSubcategory {
  id: number;
  code: string;
  description: string;

  constructor(assetCategory: AssetSubcategory = {} as AssetSubcategory) {
    this.id = assetCategory.id;
    this.code = assetCategory.code;
    this.description = assetCategory.description;
  }
}
