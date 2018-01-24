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

  constructor() {}

  static create(s: string, countryId: number, countryName: string, street: string, city: string, building: string, stairs: string, floor: string, flatNo: string) {
    const address: Address = new Address();
    address.name = name;
    address.countyId = countryId;
    address.countyName = countryName;
    address.street = street;
    address.city = city;
    address.building = building;
    address.stair = stairs;
    address.floor = floor;
    address.flatNo = flatNo;
    address.county = new County(countryId, countryName, countryName.substr(0, 2));
    return address;
  }
}
