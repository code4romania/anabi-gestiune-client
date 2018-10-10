import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Decision,
  Institution,
  RecoveryDetails,
  Solution,
  SolutionDetails,
  SolutionDetailsResponse,
  Stage
} from 'app/core';

import { cloneDeep } from 'lodash';
import * as moment from 'moment';
import { RecoveryDetailsResponse } from '../../../core/models/recovery-details-response.interface';

export interface SolutionFormValue {
  source: string;
  sentOnEmail: boolean;
  fileNumber: string;
  fileNumberParquet: string;
  institution: Institution;
  receivingDate: moment.Moment;
  decisionNumber: string;
  decisionDate: moment.Moment;
  isDefinitive: boolean;
  definitiveDate: moment.Moment;
  sentToAuthoritiesDate: moment.Moment;
  legalBasis: string;
  decision: Decision;
  stage: Stage;
  personResponsible: string;
}

@Component({
  selector: 'app-edit-solution',
  templateUrl: 'edit-solution.component.html',
  styleUrls: ['edit-solution.component.scss'],
})

export class EditSolutionComponent implements OnInit {
  @Input() solution: Solution;
  @Input() institutions: Institution[];
  @Input() decisions: Decision[];
  @Input() stages: Stage[];
  @Output() onUpdate: EventEmitter<Solution> = new EventEmitter<Solution>();
  @Output() onCancel: EventEmitter<Solution> = new EventEmitter<Solution>();
  @Output() onSave: EventEmitter<Solution> = new EventEmitter<Solution>();

  public theSolution: Solution;
  public solutionForm: FormGroup = new FormGroup({
    source: new FormControl(),
    sentOnEmail: new FormControl(),
    fileNumber: new FormControl(),
    fileNumberParquet: new FormControl(),
    institution: new FormControl(),
    receivingDate: new FormControl(),
    decisionNumber: new FormControl(),
    decisionDate: new FormControl(),
    isDefinitive: new FormControl(),
    definitiveDate: new FormControl(),
    sentToAuthoritiesDate: new FormControl(),
    legalBasis: new FormControl(),
    decision: new FormControl(),
    stage: new FormControl(),
    personResponsible: new FormControl(),
  });

  ngOnInit() {
    this.solutionForm.setValue({
      source: this.solution.solutionDetails.source,
      sentOnEmail: this.solution.solutionDetails.sentOnEmail,
      fileNumber: this.solution.solutionDetails.fileNumber,
      fileNumberParquet: this.solution.solutionDetails.fileNumberParquet,
      institution: this.solution.getInstitution() || null,
      receivingDate: this.solution.solutionDetails.receivingDate || null,
      decisionNumber: this.solution.decisionNumber || '',
      decisionDate: this.solution.decisionDate || null,
      isDefinitive: this.solution.solutionDetails.isDefinitive,
      definitiveDate: this.solution.solutionDetails.definitiveDate || null,
      sentToAuthoritiesDate: this.solution.solutionDetails.sentToAuthoritiesDate || null,
      legalBasis: this.solution.solutionDetails.legalBasis,
      decision: this.solution.getDecision() || null,
      stage: this.solution.getStage() || null,
      personResponsible: this.solution.recoveryDetails.personResponsible,
    });
    this.onChanges();
  }

  onChanges() {
    this.solutionForm.valueChanges.subscribe(aFormValue => {
      console.warn('form value', aFormValue);
      this.updateSolution(aFormValue);

      this.onUpdate.emit(this.theSolution);
    });
  }

  updateSolution(aFormValue: SolutionFormValue) {
    this.theSolution = cloneDeep(this.solution);

    if (aFormValue.institution) {
      this.theSolution.setInstitution(aFormValue.institution);
    }
    this.theSolution.decisionNumber = aFormValue.decisionNumber;
    this.theSolution.decisionDate = aFormValue.decisionDate;

    if (aFormValue.decision) {
      this.theSolution.setDecision(aFormValue.decision);
    }

    if (aFormValue.stage) {
      this.theSolution.setStage(aFormValue.stage);
    }

    this.theSolution.solutionDetails = new SolutionDetails({
      source: aFormValue.source,
      sentOnEmail: aFormValue.sentOnEmail,
      fileNumber: aFormValue.fileNumber,
      fileNumberParquet: aFormValue.fileNumberParquet,
      receivingDate: aFormValue.receivingDate ? aFormValue.receivingDate.format() : '',
      isDefinitive: aFormValue.isDefinitive,
      definitiveDate: aFormValue.definitiveDate ? aFormValue.definitiveDate.format() : '',
      sentToAuthoritiesDate: aFormValue.sentToAuthoritiesDate ? aFormValue.sentToAuthoritiesDate.format() : '',
      legalBasis: aFormValue.legalBasis,
    } as SolutionDetailsResponse);

    this.theSolution.recoveryDetails = new RecoveryDetails({
      personResponsible: aFormValue.personResponsible,
    } as RecoveryDetailsResponse);
  }

  cancel() {
    this.onCancel.emit(this.theSolution);
  }

  save() {
    this.onSave.emit(this.theSolution);
  }
}
