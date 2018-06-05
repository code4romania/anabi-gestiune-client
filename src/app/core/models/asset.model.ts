import { AssetResponse, Category, Stage } from './index';

export class Asset {
  // details
  id: number;
  name: string;
  description: string;
  identifier: string;

  // stock
  quantity: number;
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: string;

  // relation keys
  categoryId: number;
  subcategoryId: number;
  stageId: number;

  // relation objects
  category: Category;
  subcategory: Category;
  stage: Stage;

  constructor(asset?: any) {
    if (asset) {
      console.warn('received', asset);
      this.id = asset.id;
      this.name = asset.name;
      this.description = asset.description;
      this.identifier = asset.identifier;
      this.categoryId = asset.categoryId;
      this.subcategoryId = asset.subcategoryId;
      this.stageId = asset.stageId;
      this.quantity = asset.quantity;
      this.measureUnit = asset.measureUnit;
      this.estimatedAmount = asset.estimatedAmount;
      this.estimatedAmountCurrency = asset.estimatedAmountCurrency;
    }
  }

  get value(): string {
    return this.estimatedAmount ? `${this.estimatedAmount} ${this.estimatedAmountCurrency}` : undefined;
  }

  setCategory(aCategory: Category) {
    this.category = aCategory;
  }

  setSubcategory(aSubcategory: Category) {
    this.subcategory = aSubcategory;
  }

  setStage(aStage: Stage) {
    this.stage = aStage;
  }

  getCategoryName(): string {
    return this.category.name || undefined;
  }

  getSubcategoryName(): string {
    return this.subcategory.name || undefined;
  }

  getStageName(): string {
    return this.stage.name || undefined;
  }

  fromJson(aJson: AssetResponse) {
    this.id = aJson.assetId;
    this.name = aJson.assetName;
    this.identifier = aJson.assetIdentifier;
    this.estimatedAmount = aJson.estimatedAmount;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency;
  }

  toJson(): AssetResponse {
    return {
      assetId: this.id,
      assetName: this.name,
      assetIdentifier: this.identifier,
      assetCategory: this.category.description,
      assetSubcategory: this.subcategory.description,
      currentStage: this.stage.name,
      estimatedAmount: this.estimatedAmount,
      estimatedAmountCurrency: this.estimatedAmountCurrency,
    } as AssetResponse;
  }
}
