import {County} from 'shared/models/county.model';

export class Address {
  id: number;
  name: string;
  countyId: number;
  county: County;
  street: string;
  city: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;

  constructor(id: number,
              name: string,
              countyId: number,
              county: County,
              street: string,
              city: string,
              building: string,
              stair: string,
              floor: string,
              flatNo: string) {
    this.id = id;
    this.name = name;
    this.countyId = countyId;
    this.county = county;
    this.street = street;
    this.city = city;
    this.building = building;
    this.stair = stair;
    this.floor = floor;
    this.flatNo = flatNo;
  }
}
