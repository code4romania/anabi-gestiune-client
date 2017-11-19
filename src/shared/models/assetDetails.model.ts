import {Address} from 'shared/models/address.model';
import {StorageSpace} from 'shared/models/storageSpace.model';

export class AssetDetails {
  id: number;
  categoryId: number;
  categoryName: string;
  identifier: string;
  necessaryVolume: number;
  isDeleted: boolean;
  userCodeAdd: string;
  userCodeLastChange: string;
  addedDate: Date;
  lastChangeDate: Date;

  address: Address;
  storageSpaces: StorageSpace[];

  constructor(id: number,
              categoryId: number,
              categoryName: string,
              identifier: string,
              necessaryVolume: number,
              isDeleted: boolean,
              userCodeAdd: string,
              userCodeLastChange: string,
              addedDate: Date,
              lastChangeDate: Date,
              address: Address,
              storageSpaces: StorageSpace[]) {
    this.id = id;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.identifier = identifier;
    this.necessaryVolume = necessaryVolume;
    this.isDeleted = isDeleted;
    this.userCodeAdd = userCodeAdd;
    this.userCodeLastChange = userCodeLastChange;
    this.addedDate = addedDate;
    this.lastChangeDate = lastChangeDate;
    this.address = address;
    this.storageSpaces = storageSpaces;
  }
}
