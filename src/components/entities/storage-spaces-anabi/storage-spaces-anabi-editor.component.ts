import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { StorageSpacesAnabi } from './storage-spaces-anabi.model';
import { StorageSpacesAnabiService } from './storage-spaces-anabi.service';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'jhi-storage-spaces-anabi-editor',
    templateUrl: './storage-spaces-anabi-editor.component.html'
})
export class StorageSpacesAnabiEditorComponent implements OnInit {

    storageSpaces: StorageSpacesAnabi;
    isSaving: boolean;

  pokemonControl = new FormControl();

  disponibilGroups = [
    {
      name: 'Disponibil',
      disponibil: [ { value: 'contractat', viewValue: 'Contractat' }]
    },
    {
      name: 'Disponibil',
      disponibil: [ { value: 'necontractat', viewValue: 'Necontractat' }]
    },
    {
      name: 'Terti',
      disabled: false,
      disponibil: [
        { value: 'inculpat', viewValue: 'Inculpat' },
        { value: 'institutie', viewValue: 'Institutie' },
        { value: 'agent privat', viewValue: 'Agent privat' }
      ]
    }
  ];

    constructor(
        private storageSpacesService: StorageSpacesAnabiService
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
    }

    save() {
        this.isSaving = true;
        if (this.storageSpaces.id !== undefined) {
            this.subscribeToSaveResponse(
                this.storageSpacesService.update(this.storageSpaces));
        } else {
            this.subscribeToSaveResponse(
                this.storageSpacesService.create(this.storageSpaces));
        }
    }

    private subscribeToSaveResponse(result: Observable<StorageSpacesAnabi>) {
        result.subscribe((res: StorageSpacesAnabi) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: StorageSpacesAnabi) {
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
