import {Routes} from '@angular/router';

import {StorageSpacesAnabiComponent} from './storage-spaces-anabi.component';
import {StorageSpacesAnabiAddComponent} from './storage-spaces-anabi-add.component';
import {StorageSpacesAnabiEditComponent} from './storage-spaces-anabi-edit.component';

export const storageSpacesRoute: Routes = [
    {
        path: 'storage-spaces-anabi',
        component: StorageSpacesAnabiComponent,
        data: {
            pageTitle: 'anabiApp.storageSpaces.home.title'
        },
    },
  {
    path: 'storage-spaces-anabi-add',
    component: StorageSpacesAnabiAddComponent,
    data: {
      pageTitle: 'anabiApp.storageSpaces.home.title'
    }
  },
  {
    path: 'storage-spaces-anabi-edit/:id',
    component: StorageSpacesAnabiEditComponent,
    data: {
      pageTitle: 'anabiApp.storageSpaces.home.title'
    }
  }
];
