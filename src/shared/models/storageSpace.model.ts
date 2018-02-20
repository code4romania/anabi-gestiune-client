import {Address} from 'shared/models/address.model';

export class StorageSpace {
  id: Number;
  name: string;
  tip: String;
  countyCode: String;
  city: string;
  street: string;
  building: string;
  stair: string;
  floor: string;
  flatNo: string;
  categoryId: Number;
  totalVolume: Number;
  availableVolume: Number;
  length: Number;
  width: Number;
  description: String;
  asphaltedArea: Number;
  undevelopedArea: Number;
  contactData: String;
  monthlyMaintenanceCost: Number;
  maintenanceMentions: String;
  address: Address;
}
