export interface AssetRequest {
  name: string;
  categoryId: number;
  subcategoryId: number;
  stageId: number;
  quantity?: number;
  measureUnit?: string;
  estimatedAmount?: number;
  estimatedAmountCurrency?: string;
  description?: string;
}
