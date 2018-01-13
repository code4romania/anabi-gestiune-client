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
import {StorageSpacesAnabiEditorComponent} from './storage-spaces-anabi-editor.component';

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
    MatInputModule
  ],
  declarations: [
    StorageSpacesAnabiComponent, StorageSpacesAnabiEditorComponent
  ],
  entryComponents: [
    StorageSpacesAnabiComponent, StorageSpacesAnabiEditorComponent
  ],
  providers: [
    StorageSpacesAnabiService, StorageSpacesAnabiEditorComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnabiStorageSpacesAnabiModule {
}
