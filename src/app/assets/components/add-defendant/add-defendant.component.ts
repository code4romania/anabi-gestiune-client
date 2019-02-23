import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      defendantType: new FormControl(''),
      pfLastName: new FormControl(''),
      pfFirstName: new FormControl(''),
      pfNationality: new FormControl(''),
      pfIdentifier: new FormControl(''),
      pfBirthDate: new FormControl(''),
    });
  }

  get defendantType(): string {
    return this.defendantForm.value.defendantType;
  }

  onSubmit() {

  }

}
