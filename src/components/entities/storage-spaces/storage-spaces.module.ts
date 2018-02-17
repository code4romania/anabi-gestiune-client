import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {StorageSpacesListComponent, storageSpacesRoute} from './';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorageSpacesEditComponent} from './storage-spaces-edit.component';
import {StorageSpacesDeleteComponent} from './storage-spaces-delete.component';
import {CountiesHttp} from '../../../shared/http/counties.http';
import {StorageSpacesAddComponent} from './storage-spaces-add.component';
import {StorageSpacesService} from './storage-spaces.service';
import {HttpClient} from '@angular/common/http';

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
    StorageSpacesListComponent, StorageSpacesAddComponent, StorageSpacesEditComponent, StorageSpacesDeleteComponent
  ],
  entryComponents: [
    StorageSpacesListComponent, StorageSpacesAddComponent, StorageSpacesEditComponent, StorageSpacesDeleteComponent
  ],
  providers: [
    CountiesHttp, StorageSpacesService, HttpClient
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorageSpacesModule {
}
