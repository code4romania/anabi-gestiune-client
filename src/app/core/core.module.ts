import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromHttpServices from './http';
import * as fromServices from './services';

import { effects, reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    ...fromHttpServices.httpServices,
    ...fromServices.services,
  ],
})
export class CoreModule {}
