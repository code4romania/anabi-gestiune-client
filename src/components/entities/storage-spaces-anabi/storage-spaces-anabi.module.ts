import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  StorageSpacesAnabiService,
  StorageSpacesAnabiComponent,
  storageSpacesRoute
} from './';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorageSpacesAnabiAddComponent} from './storage-spaces-anabi-add.component';
import {StorageSpacesAnabiEditComponent} from './storage-spaces-anabi-edit.component';

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
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatButtonModule
  ],
  declarations: [
    StorageSpacesAnabiComponent, StorageSpacesAnabiAddComponent, StorageSpacesAnabiEditComponent
  ],
  entryComponents: [
    StorageSpacesAnabiComponent, StorageSpacesAnabiAddComponent, StorageSpacesAnabiEditComponent
  ],
  providers: [
    StorageSpacesAnabiService, StorageSpacesAnabiAddComponent, StorageSpacesAnabiEditComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnabiStorageSpacesAnabiModule {
}
