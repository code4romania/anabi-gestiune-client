export class DecisionFilter {
  decisionNumber: string;
  fileNumber: string;
  personId: string;
  personName: string;

  constructor(decisionNumber?: string, fileNumber?: string, personId?: string, personName?: string) {
    this.decisionNumber = decisionNumber || null;
    this.fileNumber =  fileNumber || null;
    this.personId = personId || null;
    this.personName = personName || null;
  }

  getFormValues(form) {
    if (this.hasOwnProperty(form.filterKey)) {
      this[form.filterKey] = form.filterValue
      return
    }
  }
}
