import { CommonModule } from '@angular/common';
import { InstitutionsComponent } from './institutions.component';

import { InstitutionsRoutingModule } from './institutions-routing.module';

import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [InstitutionsComponent],
  imports: [
    InstitutionsRoutingModule,
    CommonModule,
    SharedModule,
  ],
})
export class InstitutionsModule { }
