import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

// components
import * as fromComponents from './components';

const modules = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    modules,
  ],
  exports: [
    ...fromComponents.components,
    // modules
    modules,
  ],
})
export class SharedModule {}
