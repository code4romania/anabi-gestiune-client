import {Injectable} from '@angular/core';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {GenericService} from '../../../shared/service/generic.service';

@Injectable()
export class StorageSpacesService extends GenericService<StorageSpace> {

  itemUrlPart: string = '/storageSpaces';

  getPart(): string {
    return this.itemUrlPart;
  }

  getUpdateUrl(item: StorageSpace): string {
    return this.getPart() + '/' + item.id;
  }

  convert(items: StorageSpace): StorageSpace {
    return Object.assign(StorageSpace, items);
  }

  convertItemFromServer(json: any): StorageSpace {
    return Object.assign(StorageSpace, json);
  }

}
