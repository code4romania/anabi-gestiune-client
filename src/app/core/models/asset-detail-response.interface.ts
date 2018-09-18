import { JournalResponse } from './journal-response.interface';

export interface AssetDetailResponse {
  id: number;
  name: string;
  description: string;
  categoryId?: number;
  subcategoryId: number;
  identifier: string;
  remarks: string;
  stageId: number;
  quantity: number;
  measureUnit: string;
  estimatedAmount: number;
  estimatedAmountCurrency: string;
  journal: JournalResponse;
}
