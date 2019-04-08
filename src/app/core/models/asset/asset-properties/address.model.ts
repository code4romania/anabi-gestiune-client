import { AssetProperty, AssetPropertyType } from '../asset-property.model';
import { AddressResponse } from './address-response.interface';
import { CountyResponse } from './county-response.interface';
import { County } from './county.model';

export class Address extends AssetProperty {
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

  constructor(aData?: AddressResponse) {
    super(AssetPropertyType.Address);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: AddressResponse) {
    this.id = aJson.id || undefined;
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

  toJson(): any {
    return {
      id: this.id,
      countyId: this.countyId,
      county: this.county,
      street: this.street,
      city: this.city,
      building: this.building,
      stair: this.stair,
      floor: this.floor,
      flatNo: this.flatNo,
      description: this.description,
    };
  }
}
