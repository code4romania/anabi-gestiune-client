import {Routes} from '@angular/router';

import {StorageSpacesListComponent} from './storage-spaces-list.component';
import {StorageSpacesAddComponent} from './storage-spaces-add.component';
import {StorageSpacesEditComponent} from './storage-spaces-edit.component';
import {StorageSpacesDeleteComponent} from './storage-spaces-delete.component';

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
    component: StorageSpacesAddComponent,
    data: {
      pageTitle: 'Spatii - adaugare'
    }
  },
  {
    path: 'storage-spaces-edit/:id',
    component: StorageSpacesEditComponent,
    data: {
      pageTitle: 'Spatii - ediatare'
    }
  },
  {
    path: 'storage-spaces-delete/:id',
    component: StorageSpacesDeleteComponent,
    data: {
      pageTitle: 'Spatii - stergere'
    }
  }
];
