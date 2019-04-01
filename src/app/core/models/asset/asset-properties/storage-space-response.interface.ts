import { Address } from './address.model';

export interface StorageSpaceResponse {
  id: number;
  name: string;
  type: string;
  address: Address;
}
