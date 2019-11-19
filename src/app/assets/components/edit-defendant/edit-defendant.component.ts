import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Defendant, DefendantType, Identifier, ROMANIA } from '@app/core/models';
import { cloneDeep } from 'lodash';

// TODO: Extract into something more generic
// for entities that are a person
@Component({
  selector: 'app-edit-defendant',
  templateUrl: './edit-defendant.component.html',
  styleUrls: ['./edit-defendant.component.scss'],
})
export class EditDefendantComponent implements OnInit {

  @Input() entity: Defendant;
  @Input() identifiers: Identifier[];
  @Input() title: string = '';

  @Output() onUpdate: EventEmitter<Defendant> = new EventEmitter<Defendant>();
  @Output() onCancel: EventEmitter<Defendant> = new EventEmitter<Defendant>();
  @Output() onSave: EventEmitter<Defendant> = new EventEmitter<Defendant>();

  theDefendant: Defendant;

  defendantTypeOptions: string[] = [
    DefendantType.Person,
    DefendantType.Company,
  ];

  defendantForm: FormGroup;

  ngOnInit() {
    this.theDefendant = cloneDeep(this.entity);

    this.defendantForm = new FormGroup({
      defendantType: new FormControl(
        this.theDefendant.isPerson ? DefendantType.Person : DefendantType.Company,
        [Validators.required]
      ),
      pf: new FormGroup({
        pfLastName: new FormControl(
          this.theDefendant.name,
          [Validators.required]
        ),
        pfFirstName: new FormControl(
          this.theDefendant.firstName,
          [Validators.required]
        ),
        pfNationality: new FormControl(
          this.theDefendant.nationality,
          [Validators.required]
        ),
        pfIdentifierType: new FormControl(this.theDefendant.identifierId, [ Validators.required ]),
        pfIdentifier: new FormControl(
          this.theDefendant.identification,
          [Validators.required]
        ),
        pfBirthDate: new FormControl(
          this.theDefendant.birthdate
        ),
      }),
      pj: new FormGroup({
        pjName: new FormControl(
          this.theDefendant.name,
          [Validators.required]
        ),
        pjCountry: new FormControl(
          this.theDefendant.nationality,
          [Validators.required]
        ),
        pjIdentifierType: new FormControl(this.theDefendant.identifierId, [ Validators.required ]),
        pjIdentifier: new FormControl(
          this.theDefendant.identification,
          [Validators.required]
        ),
      }),
    });

    this.onChanges();
  }

  onChanges() {
    this.defendantForm.valueChanges.subscribe(aFormValue => {
      this.theDefendant = cloneDeep(this.entity);
      this.theDefendant.fromForm(aFormValue);

      this.onUpdate.emit(this.theDefendant);
    });
  }

  get isFormValid(): boolean {

    if (this.isPerson(this.defendantType)) {
      return this.defendantForm.get('pf').valid;
    }

    return this.defendantForm.get('pj').valid;
  }

  get defendantType(): string {
    return this.defendantForm.value.defendantType;
  }

  isPerson(aValue: string): boolean {
    return aValue === DefendantType.Person;
  }

  isCompany(aValue: string): boolean {
    return aValue === DefendantType.Company;
  }

  isRomania(aCountry: string) {
    return aCountry === ROMANIA;
  }

  get personIdentifiers(): Identifier[] {
    return this.identifiers.filter((aIdentifier: Identifier) => !aIdentifier.isForCompany);
  }

  get companyIdentifiers(): Identifier[] {
    return this.identifiers.filter((aIdentifier: Identifier) => aIdentifier.isForCompany);
  }

  cancel() {
    this.onCancel.emit(this.theDefendant);
  }

  save() {
    this.onSave.emit(this.theDefendant);
  }
}
