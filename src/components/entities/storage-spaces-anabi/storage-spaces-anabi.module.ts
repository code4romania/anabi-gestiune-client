import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  StorageSpacesAnabiService,
  StorageSpacesAnabiComponent,
  storageSpacesRoute
} from './';
import {MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatSortModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

const ENTITY_STATES = [
  ...storageSpacesRoute,
];

@NgModule({
  imports: [
    RouterModule.forChild(ENTITY_STATES), CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTableModule,
    FormsModule
  ],
  declarations: [
    StorageSpacesAnabiComponent
  ],
  entryComponents: [
    StorageSpacesAnabiComponent
  ],
  providers: [
    StorageSpacesAnabiService,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnabiStorageSpacesAnabiModule {
}
