import {Injectable} from '@angular/core';
import {StorageSpace} from '../../../shared/models/storageSpace.model';
import {GenericService} from '../../../shared/service/generic.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class StorageSpacesService extends GenericService<StorageSpace> {

  itemUrlPart: String = '/storageSpaces';

  getPart(): string {
    return environment.api_url  + this.itemUrlPart;
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
