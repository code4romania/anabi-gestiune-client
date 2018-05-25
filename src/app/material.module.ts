import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})

export class MaterialModule {
}
