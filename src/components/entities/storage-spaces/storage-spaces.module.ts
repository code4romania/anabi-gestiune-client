import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {StorageSpacesListComponent, storageSpacesRoute} from './';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorageSpacesAnabiEditComponent} from './storage-spaces-edit.component';
import {StorageSpacesAnabiDeleteComponent} from './storage-spaces-delete.component';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpacesAnabiAddComponent} from './storage-spaces-add.component';
import {StorageSpacesService} from './storage-spaces.service';

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
    StorageSpacesListComponent, StorageSpacesAnabiAddComponent, StorageSpacesAnabiEditComponent, StorageSpacesAnabiDeleteComponent
  ],
  entryComponents: [
    StorageSpacesListComponent, StorageSpacesAnabiAddComponent, StorageSpacesAnabiEditComponent, StorageSpacesAnabiDeleteComponent
  ],
  providers: [
    CountiesHttp, StorageSpacesService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorageSpacesModule {
}
