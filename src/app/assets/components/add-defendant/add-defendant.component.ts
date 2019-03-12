import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefendantForm, PERSOANA_FIZICA, PERSOANA_JURIDICA, ROMANIA } from '@app/core/models/defendant-form.model';
import { Defendant } from '@app/core/models/defendant.model';

@Component({
  selector: 'app-add-defendant',
  templateUrl: './add-defendant.component.html',
  styleUrls: ['./add-defendant.component.scss'],
})
export class AddDefendantComponent implements OnInit {

  @Input() defendant: Defendant = new Defendant();
  @Output() defendantAdd: EventEmitter<Defendant> = new EventEmitter<Defendant>();

  PERSOANA_FIZICA: string = PERSOANA_FIZICA;
  PERSOANA_JURIDICA: string = PERSOANA_JURIDICA;
  ROMANIA: string = ROMANIA;

  defendantTypeOptions: string[] = [
    PERSOANA_FIZICA,
    PERSOANA_JURIDICA,
  ];

  selectedDefendantTypeOption: string;
  defendantForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.defendantForm = new FormGroup({
      defendantType: new FormControl(
        this.defendant.isPerson ? PERSOANA_FIZICA : PERSOANA_JURIDICA,
        [Validators.required]
      ),
      pf: new FormGroup({
        pfLastName: new FormControl(
          this.defendant.name,
          [Validators.required]
        ),
        pfFirstName: new FormControl(
          this.defendant.firstName,
          [Validators.required]
        ),
        pfNationality: new FormControl(
          this.defendant.nationality,
          [Validators.required]
        ),
        pfIdentifier: new FormControl(
          this.defendant.identification,
          [Validators.required]
        ),
        pfBirthDate: new FormControl(
          this.defendant.birthdate
        ),
      }),
      pj: new FormGroup({
        pjName: new FormControl(
          this.defendant.name,
          [Validators.required]
        ),
        pjCountry: new FormControl(
          this.defendant.nationality,
          [Validators.required]
        ),
        pjIdentifier: new FormControl(
          this.defendant.identification,
          [Validators.required]
        ),
      }),
    });
  }

  get isFormValid(): boolean {
    return this.defendantType === PERSOANA_FIZICA &&
      this.defendantForm.get('pf').valid ||
      this.defendantType === PERSOANA_JURIDICA &&
      this.defendantForm.get('pj').valid
  }

  get defendantType(): string {
    return this.defendantForm.value.defendantType;
  }

  onSubmit() {
    this.defendantAdd.emit(new Defendant(this.defendantForm.value as DefendantForm));
  }

}
