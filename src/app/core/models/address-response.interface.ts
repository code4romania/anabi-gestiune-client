import { CountyResponse } from './county-response.interface';

export interface AddressResponse {
  id: number;
  countyId: number;
  county: CountyResponse;
  street: string;
  city: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;
}
