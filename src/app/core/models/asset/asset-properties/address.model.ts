import { AssetProperty, AssetPropertyType } from '../asset-property.model';
import { Asset, IAsset } from '../asset.model';
import { AddressResponse } from './address-response.interface';
import { County, ICounty } from './county.model';

export interface IAddress {
  id: number;
  countyId: number;
  county: ICounty;
  street: string;
  city: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;
  description: string;
  asset: IAsset;
  assetId: number;
}

export interface AddressForm {
  county: County;
  city: string;
  street: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;
  description: string;
}

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

  constructor(aData?: IAddress) {
    super(AssetPropertyType.Address);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IAddress) {
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
    this.asset = aJson.asset ? new Asset(aJson.asset) : undefined;
    this.assetId = aJson.assetId;
  }

  fromForm(aForm: AddressForm) {
    this.setCounty(aForm.county);
    this.street = aForm.street;
    this.city = aForm.city;
    this.building = aForm.building;
    this.stair = aForm.stair;
    this.floor = aForm.floor;
    this.flatNo = aForm.flatNo;
    this.description = aForm.description;
  }

  fromResponse(aJson: AddressResponse) {
    this.id = aJson.id || undefined;
    this.countyId = aJson.countyId;

    this.street = aJson.street;
    this.city = aJson.city;
    this.building = aJson.building;
    this.stair = aJson.stair;
    this.floor = aJson.floor;
    this.flatNo = aJson.flatNo;
    this.description = aJson.description;
  }

  toJson(): IAddress {
    return {
      id: this.id,
      countyId: this.countyId,
      county: this.county.toJson(),
      street: this.street,
      city: this.city,
      building: this.building,
      stair: this.stair,
      floor: this.floor,
      flatNo: this.flatNo,
      description: this.description,
      asset: this.asset.toJson(),
      assetId: this.assetId,
    };
  }

  toRequest(): any {
    return {
      id: this.id,
      countyId: this.countyId,
      street: this.street,
      city: this.city,
      building: this.building,
      stair: this.stair,
      floor: this.floor,
      flatNo: this.flatNo,
      description: this.description,
    };
  }

  setCounty(aCounty: County) {
    this.county = aCounty;
    this.countyId = aCounty.id;
  }

  getCountyName() {
    return this.county ? this.county.name : '';
  }
}
