import * as moment from 'moment';
import { JournalResponse } from './journal-response.interface';

export class Journal {
  addedDate: moment.Moment;
  userCodeAdd: string;
  userCodeLastChange: moment.Moment;
  lastChangeDate: moment.Moment;

  constructor(aData?: JournalResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: JournalResponse) {
    this.addedDate = moment(aJson.addedDate, moment.ISO_8601);
    this.userCodeAdd = aJson.userCodeAdd;
    this.userCodeLastChange = moment(aJson.userCodeLastChange, moment.ISO_8601);
    this.lastChangeDate = moment(aJson.lastChangeDate, moment.ISO_8601);
  }

  toJson(): JournalResponse {
    return {
      addedDate: this.addedDate ? this.addedDate.format() : '',
      userCodeAdd: this.userCodeAdd,
      userCodeLastChange: this.userCodeLastChange ? this.userCodeLastChange.format() : '',
      lastChangeDate: this.lastChangeDate ? this.lastChangeDate.format() : '',
    } as JournalResponse;
  }
}
