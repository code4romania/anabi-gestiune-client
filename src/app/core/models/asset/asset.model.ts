import { Category, ICategory } from '../category.model';
import { IJournal, Journal } from '../journal.model';
import { IStage, Stage } from '../stage.model';
import { AssetDetailResponse } from './asset-detail-response.interface';
import { AssetResponse } from './asset-response.interface';

export interface IAsset {
  id: number;
  name: string;
  description: string;
  identifier: string;
  remarks: string;
  quantity: number;
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: string;
  category: ICategory;
  subcategory: ICategory;
  stage: IStage;
  journal: IJournal;
  hasDetails: boolean;
}

export class Asset {
  // details
  id: number;
  name: string;
  description: string;
  identifier: string;
  remarks: string;
  quantity: number;
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: string;

  // relation objects
  category: Category;
  subcategory: Category;
  stage: Stage;
  journal: Journal;

  private hasDetails = false;

  constructor(aData?: IAsset) {
    if (aData) {
      this.fromJson(aData);
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

  get categoryName(): string {
    return this.category.name || undefined;
  }

  get subcategoryName(): string {
    return this.subcategory.name || undefined;
  }

  get stageName(): string {
    return this.stage.name || undefined;
  }

  isDetailed(): boolean {
    return this.hasDetails;
  }

  fromAssetResponseJson(aJson: AssetResponse) {
    this.id = aJson.assetId;
    this.name = aJson.assetName;
    this.identifier = aJson.assetIdentifier;
    this.estimatedAmount = aJson.estimatedAmount;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency;
  }

  fromAssetDetailResponseJson(aJson: AssetDetailResponse) {
    this.hasDetails = true;

    this.id = aJson.id;
    this.name = aJson.name;
    this.description = aJson.description;
    this.identifier = aJson.identifier;
    this.remarks = aJson.remarks;
    this.quantity = aJson.quantity;
    this.measureUnit = aJson.measureUnit;
    this.estimatedAmount = aJson.estimatedAmount;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency;
    this.journal = new Journal(aJson.journal);
  }

  fromForm(aJson: any) {
    this.name = aJson.name;
    this.category = aJson.category ? new Category(aJson.category) : undefined;
    this.subcategory = aJson.subcategory ? new Category(aJson.subcategory) : undefined;
    this.stage = aJson.stage ? new Stage(aJson.stage) : undefined;
    this.description = aJson.description || undefined;
    this.identifier = aJson.identifier || undefined;
    this.remarks = aJson.remarks || undefined;
    this.quantity = aJson.quantity || undefined;
    this.measureUnit = aJson.measureUnit || undefined;
    this.estimatedAmount = aJson.estimatedAmount || undefined;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency || undefined;
  }

  fromJson(aJson: IAsset) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.category = aJson.category ? new Category(aJson.category) : undefined;
    this.subcategory = aJson.subcategory ? new Category(aJson.subcategory) : undefined;
    this.stage = aJson.stage ? new Stage(aJson.stage) : undefined;
    this.description = aJson.description || undefined;
    this.identifier = aJson.identifier || undefined;
    this.remarks = aJson.remarks || undefined;
    this.quantity = aJson.quantity || undefined;
    this.measureUnit = aJson.measureUnit || undefined;
    this.estimatedAmount = aJson.estimatedAmount || undefined;
    this.estimatedAmountCurrency = aJson.estimatedAmountCurrency || undefined;
    this.journal = aJson.journal ? new Journal(aJson.journal) : undefined;
    this.hasDetails = aJson.hasDetails;
  }

  toJson(): IAsset {
    return {
      id: this.id,
      name: this.name,
      category: this.category ? this.category.toJson() : undefined,
      subcategory: this.subcategory ? this.subcategory.toJson() : undefined,
      stage: this.stage ? this.stage.toJson() : undefined,
      quantity: this.quantity,
      measureUnit: this.measureUnit,
      estimatedAmount: this.estimatedAmount,
      estimatedAmountCurrency: this.estimatedAmountCurrency,
      description: this.description,
      identifier: this.identifier,
      remarks: this.remarks,
      journal: this.journal ? this.journal.toJson() : undefined,
      hasDetails: this.hasDetails,
    } as IAsset;
  }
}
