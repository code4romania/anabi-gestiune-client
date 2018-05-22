import { Address } from 'shared/models/address.model';

export class StorageSpace {
  id: number;
  address: Address;
  name: string;

  constructor(id: number, address: Address, name: string) {
    this.id = id;
    this.address = address;
    this.name = name;
  }
}
