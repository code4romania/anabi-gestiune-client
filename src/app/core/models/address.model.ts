import { AddressResponse } from './address-response.interface';
import { County } from './county.model';

export class Address {
  id: number;
  countyId: number;
  county: County;
  street: string;
  city: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;

  constructor(aData?: AddressResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: AddressResponse) {
    this.id = aJson.id;
    this.countyId = aJson.countyId;
    this.county = new County(aJson.county);
    this.street = aJson.street;
    this.city = aJson.city;
    this.building = aJson.building;
    this.stair = aJson.stair;
    this.floor = aJson.floor;
    this.flatNo = aJson.flatNo;
  }
}
