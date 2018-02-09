import {Address} from 'shared/models/address.model';

export class StorageSpace {
  id: number = 0;
  address: Address = new Address();
  name: string = '';
  tip: String;
}
