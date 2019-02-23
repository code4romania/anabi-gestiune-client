import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefendantForm } from '@app/core/models/defendant-form.model';
import { Defendant } from '@app/core/models/defendant.model';

@Component({
  selector: 'app-add-defendant',
  templateUrl: './add-defendant.component.html',
  styleUrls: ['./add-defendant.component.scss'],
})
export class AddDefendantComponent implements OnInit {

  @Output() defendantAdd: EventEmitter<Defendant> = new EventEmitter<Defendant>();

  defendantTypeOptions: string[] = [
    'Persoana Fizica',
    'Persoana Juridica',
  ];

  selectedDefendantTypeOption: string;
  defendantForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.defendantForm = new FormGroup({
      defendantType: new FormControl('', [Validators.required]),
      pf: new FormGroup({
        pfLastName: new FormControl('', [Validators.required]),
        pfFirstName: new FormControl(''),
        pfNationality: new FormControl(''),
        pfIdentifier: new FormControl(''),
        pfBirthDate: new FormControl(''),
      }),
      pj: new FormGroup({
        pjName: new FormControl(''),
        pjCountry: new FormControl(''),
        pjIdentifier: new FormControl(''),
      }),
    });
  }

  get isFormValid(): boolean {
    return this.defendantForm.get('defendantType').valid &&
          (
            this.defendantForm.get('pf').valid ||
            this.defendantForm.get('pj').valid
          )
  }

  get defendantType(): string {
    return this.defendantForm.value.defendantType;
  }

  onSubmit() {
    this.defendantAdd.emit(new Defendant(this.defendantForm.value as DefendantForm));
  }

}
