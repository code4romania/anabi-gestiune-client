import { AddressResponse } from './address-response.interface';
import { Asset } from './asset.model';
import { County } from './county.model';

export class Address {
  id: number;
  countyId: number = null;
  county: County;
  street: string = '';
  city: string = '';
  building: string = '';
  stair: string;
  floor: string;
  flatNo: string;
  description: string = '';
  private asset: Asset;

  constructor(aData?: AddressResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  setAsset(aAsset: Asset) {
    this.asset = aAsset;
  }

  getAsset(): Asset {
    return this.asset;
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
    this.description = aJson.description;
  }
}
