import * as moment from 'moment';
import { JournalResponse } from './index';

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
    this.addedDate = moment(aJson.addedDate);
    this.userCodeAdd = aJson.userCodeAdd;
    this.userCodeLastChange = moment(aJson.userCodeLastChange);
    this.lastChangeDate = moment(aJson.lastChangeDate);
  }

  toJson(): JournalResponse {
    return {
      addedDate: this.addedDate.format(),
      userCodeAdd: this.userCodeAdd,
      userCodeLastChange: this.userCodeLastChange.format(),
      lastChangeDate: this.lastChangeDate.format(),
    } as JournalResponse;
  }
}
