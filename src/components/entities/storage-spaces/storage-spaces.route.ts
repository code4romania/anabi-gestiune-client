import {Routes} from '@angular/router';

import {StorageSpacesListComponent} from './storage-spaces-list.component';
import {StorageSpacesAnabiAddComponent} from './storage-spaces-add.component';
import {StorageSpacesAnabiEditComponent} from './storage-spaces-edit.component';
import {StorageSpacesAnabiDeleteComponent} from './storage-spaces-delete.component';

export const storageSpacesRoute: Routes = [
    {
        path: 'storage-spaces-list',
        component: StorageSpacesListComponent,
        data: {
            pageTitle: 'Spatii - listare'
        },
    },
  {
    path: 'storage-spaces-add',
    component: StorageSpacesAnabiAddComponent,
    data: {
      pageTitle: 'Spatii - adaugare'
    }
  },
  {
    path: 'storage-spaces-edit/:id',
    component: StorageSpacesAnabiEditComponent,
    data: {
      pageTitle: 'Spatii - ediatare'
    }
  },
  {
    path: 'storage-spaces-delete/:id',
    component: StorageSpacesAnabiDeleteComponent,
    data: {
      pageTitle: 'Spatii - stergere'
    }
  }
];
