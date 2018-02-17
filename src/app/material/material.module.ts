import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
  ],
  declarations: []
})
export class MaterialModule { }
