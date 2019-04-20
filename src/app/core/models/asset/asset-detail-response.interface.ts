import { JournalResponse } from '../journal-response.interface';
import { AddressResponse } from './asset-properties/address-response.interface';

export interface AssetDetailResponse {
  id: number;
  name: string;
  description: string;
  address: AddressResponse;
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
