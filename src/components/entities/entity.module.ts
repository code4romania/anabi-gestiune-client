import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AnabiStorageSpacesAnabiModule} from './storage-spaces-anabi/storage-spaces-anabi.module';
import {MatTableModule} from '@angular/material';

@NgModule({
    imports: [
           AnabiStorageSpacesAnabiModule, CommonModule, MatTableModule
    ],
    declarations: [],
    entryComponents: [],
    providers: []
})
export class AnabiEntityModule {}
