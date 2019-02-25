import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefendantForm, DefendantConfig } from '@app/core/models/defendant-form.model';
import { Defendant } from '@app/core/models/defendant.model';

@Component({
  selector: 'app-add-defendant',
  templateUrl: './add-defendant.component.html',
  styleUrls: ['./add-defendant.component.scss'],
})
export class AddDefendantComponent implements OnInit {

  @Input() defendant: Defendant = new Defendant();
  @Output() defendantAdd: EventEmitter<Defendant> = new EventEmitter<Defendant>();

  PERSOANA_FIZICA: string = DefendantConfig.PERSOANA_FIZICA;
  PERSOANA_JURIDICA: string = DefendantConfig.PERSOANA_JURIDICA;
  ROMANIA: string = DefendantConfig.ROMANIA;

  defendantTypeOptions: string[] = [
    this.PERSOANA_FIZICA,
    this.PERSOANA_JURIDICA,
  ];

  selectedDefendantTypeOption: string;
  defendantForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.defendantForm = new FormGroup({
      defendantType: new FormControl(
        this.defendant.isPerson ? this.PERSOANA_FIZICA : this.PERSOANA_JURIDICA,
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
    return this.defendantType == this.PERSOANA_FIZICA &&
      this.defendantForm.get('pf').valid ||
      this.defendantType == this.PERSOANA_JURIDICA &&
      this.defendantForm.get('pj').valid
  }

  get defendantType(): string {
    return this.defendantForm.value.defendantType;
  }

  onSubmit() {
    this.defendantAdd.emit(new Defendant(this.defendantForm.value as DefendantForm));
  }

}
