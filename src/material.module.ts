import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

const modules = [
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatTabsModule,
];

@NgModule({
  imports: [modules],
  exports: [modules]
})

export class MaterialModule {}
