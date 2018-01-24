import {Address} from 'shared/models/address.model';

export class StorageSpace {
  id: number;
  address: Address;
  name: string;
  tip: String;

  constructor(id: number, address: Address, name: string) {
    this.id = id;
    this.address = address;
    this.name = name;
  }

  static empty(): StorageSpace {
    return new StorageSpace(0, new Address(), '');
  }

  static create(id: number, name: string, address: Address): StorageSpace {
    return new StorageSpace(id, address, name);
  }
}
