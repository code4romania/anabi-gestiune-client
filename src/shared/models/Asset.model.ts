import {AssetCategory} from 'shared/models/AssetCategory.model';

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

  constructor(asset: Asset = {} as Asset) {
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
