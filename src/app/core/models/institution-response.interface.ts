import { AddressResponse } from './address-response.interface';

export interface InstitutionResponse {
  id: number;
  name: string;
  categoryId: number;
  address: AddressResponse;
}
