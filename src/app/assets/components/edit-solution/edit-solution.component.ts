import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Solution, SolutionDetails, SolutionDetailsResponse } from 'app/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-edit-solution',
  templateUrl: 'edit-solution.component.html',
  styleUrls: ['edit-solution.component.scss'],
})

export class EditSolutionComponent implements OnInit {
  @Input() solution: Solution;
  @Output() onUpdate: EventEmitter<Solution> = new EventEmitter<Solution>();

  public theSolution: Solution;
  public solutionForm: FormGroup = new FormGroup({
    source: new FormControl(),
    sentOnEmail: new FormControl(),
    fileNumber: new FormControl(),
    fileNumberParquet: new FormControl(),
  });

  ngOnInit() {
    this.solutionForm.setValue({
      source: this.solution.solutionDetails.source,
      sentOnEmail: this.solution.solutionDetails.sentOnEmail,
      fileNumber: this.solution.solutionDetails.fileNumber,
      fileNumberParquet: this.solution.solutionDetails.fileNumberParquet,
    });
    this.onChanges();
  }

  onChanges() {
    this.solutionForm.valueChanges.subscribe(aFormValue => {
      console.warn('form value', aFormValue);
      this.updateSolution(aFormValue);

      // this.theSolution.solutionDetails.setSentOnEmail(true);
      // this.theSolution.solutionDetails.setSource('sample source');

      // this.theSolution.solutionDetails.setSentOnEmail(aFormValue.sentOnEmail);
      // this.theSolution.solutionDetails.setFileNumber(aFormValue.fileNumber);
      // this.theSolution.solutionDetails.setFileNumberParquet(aFormValue.fileNumberParquet);
      /*this.theSolution.solutionDetails = {
        ...this.theSolution.solutionDetails,
        source: aFormValue.source,
        sentOnEmail: aFormValue.sentOnEmail || false,
        fileNumber: aFormValue.fileNumber,
        fileNumberParquet: aFormValue.fileNumberParquet,
      } as SolutionDetails;*/

      this.onUpdate.emit(this.theSolution);
    });
  }

  updateSolution(aFormValue: SolutionDetailsResponse) {
    this.theSolution = cloneDeep(this.solution);
    this.theSolution.solutionDetails = new SolutionDetails(aFormValue);

    console.warn('solution', this.theSolution);
  }
}
