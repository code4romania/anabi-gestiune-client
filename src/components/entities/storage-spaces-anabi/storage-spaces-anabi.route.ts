import {Routes} from '@angular/router';

import {StorageSpacesAnabiComponent} from './storage-spaces-anabi.component';

export const storageSpacesRoute: Routes = [
    {
        path: 'storage-spaces-anabi',
        component: StorageSpacesAnabiComponent,
        data: {
            pageTitle: 'anabiApp.storageSpaces.home.title'
        },
    }
];
