export class Journal {
  userCodeAdd: string;
  userCodeLastChange: string;
  addedDate: any;
  lastChangeDate: any;

  constructor(userCodeAdd: string, userCodeLastChange: string, addedDate: any, lastChangeDate: any) {
    this.userCodeAdd = userCodeAdd;
    this.userCodeLastChange = userCodeLastChange;
    this.addedDate = addedDate;
    this.lastChangeDate = lastChangeDate;
  }
}
