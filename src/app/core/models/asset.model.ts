import { AssetCategory } from './asset-category.model';

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
  estimatedAmountCurrency: number;

  // relation keys
  categoryId: number;
  subcategoryId: number;
  stageId: number;

  // relation objects
  category: AssetCategory;
  subcategory: any;
  stage: any;

  constructor(asset: any) {
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

  get value(): string {
    return `${this.estimatedAmount} ${this.estimatedAmountCurrency}`;
  }

  fromJson(aJson: any) {
    this.id = aJson.assetId;
    this.name = aJson.assetName;
    this.identifier = aJson.assetIdentifier;
    this.categoryId = aJson.assetCategory;
    this.subcategoryId = aJson.assetSubcategory;
    this.stageId = aJson.currentStage;
    this.estimatedAmount = aJson.estimatedAmount;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency;
  }
}
