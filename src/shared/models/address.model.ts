import {County} from 'shared/models/county.model';

export class Address {
  id: number;
  name: string;
  countyId: number;
  countyName: string;
  county: County;
  street: string;
  city: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;
}
