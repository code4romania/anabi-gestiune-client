import { AddressResponse } from './';

export interface InstitutionResponse {
  id: number;
  name: string;
  categoryId: number;
  address: AddressResponse;
}
