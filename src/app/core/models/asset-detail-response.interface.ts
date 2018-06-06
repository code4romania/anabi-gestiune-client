export interface AssetDetailResponse {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  subcategoryId: number;
  identifier: string;
  remarks: number;
  stageId: number;
  quantity: number;
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: string;
  addedDate: string;
  userCodeAdd: string;
  lastChangedDate: string;
  userCodeLastChange: string;
}
