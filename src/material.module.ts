import {NgModule} from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
  ],
  declarations: []
})

export class MaterialModule {}
