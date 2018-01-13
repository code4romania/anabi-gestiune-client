import {Routes} from '@angular/router';

import {StorageSpacesAnabiComponent} from './storage-spaces-anabi.component';
import {StorageSpacesAnabiEditorComponent} from './storage-spaces-anabi-editor.component';

export const storageSpacesRoute: Routes = [
    {
        path: 'storage-spaces-anabi',
        component: StorageSpacesAnabiComponent,
        data: {
            pageTitle: 'anabiApp.storageSpaces.home.title'
        },
    },
  {
    path: 'storage-spaces-anabi-edit',
    component: StorageSpacesAnabiEditorComponent,
    data: {
      pageTitle: 'anabiApp.storageSpaces.home.title'
    }
  }
];
