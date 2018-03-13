import {Address} from 'shared/models/address.model';
import {StorageSpace} from 'shared/models/storageSpace.model';

export class Asset {
  id: number;
  name: string;
  description: string;
  identifier: string;
  quantity: number;

  // stock
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: number;

  // relation keys
  categoryId: number;
  stageId: number;

  // relation objects
  category: any;
  stage: any;

  constructor(asset: Asset = {} as Asset) {
    const {
      id = null,
      name = null,
      description = null,
      identifier = null,
      quantity = null,
      measureUnit = null,
      estimatedAmount = null,
      estimatedAmountCurrency = null,
      categoryId = null,
      stageId = null
    } = asset;

    this.id = id;
    this.name = name;
    this.description = description;
    this.identifier = identifier;
    this.quantity = quantity;
    this.measureUnit = measureUnit;
    this.estimatedAmount = estimatedAmount;
    this.estimatedAmountCurrency = estimatedAmountCurrency;
    this.categoryId = categoryId;
    this.stageId = stageId;
  }
}
