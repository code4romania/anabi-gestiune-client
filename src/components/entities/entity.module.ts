import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {StorageSpacesModule} from './storage-spaces/storage-spaces.module';
import {MatTableModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';

@NgModule({
    imports: [
           StorageSpacesModule, CommonModule, MatTableModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [HttpClient]
})
export class AnabiEntityModule {}
