import * as moment from 'moment';
import { JournalResponse } from './journal-response.interface';

export interface IJournal {
  addedDate: string;
  userCodeAdd: string;
  userCodeLastChange: string;
  lastChangeDate: string;
}

export class Journal {
  addedDate: moment.Moment;
  userCodeAdd: string;
  userCodeLastChange: moment.Moment;
  lastChangeDate: moment.Moment;

  constructor(aData?: IJournal) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IJournal) {
    this.addedDate = aJson.addedDate ? moment(aJson.addedDate, moment.ISO_8601) : undefined;
    this.userCodeAdd = aJson.userCodeAdd;
    this.userCodeLastChange = aJson.userCodeLastChange ? moment(aJson.userCodeLastChange, moment.ISO_8601) : undefined;
    this.lastChangeDate = aJson.lastChangeDate ? moment(aJson.lastChangeDate, moment.ISO_8601) : undefined;
  }

  toJson(): IJournal {
    return {
      addedDate: this.addedDate ? this.addedDate.toISOString() : undefined,
      userCodeAdd: this.userCodeAdd,
      userCodeLastChange: this.userCodeLastChange ? this.userCodeLastChange.toISOString() : undefined,
      lastChangeDate: this.lastChangeDate ? this.lastChangeDate.toISOString() : undefined,
    } as IJournal;
  }

  toRequest(): JournalResponse {
    return {
      addedDate: this.addedDate ? this.addedDate.format() : '',
      userCodeAdd: this.userCodeAdd,
      userCodeLastChange: this.userCodeLastChange ? this.userCodeLastChange.format() : '',
      lastChangeDate: this.lastChangeDate ? this.lastChangeDate.format() : '',
    } as JournalResponse;
  }
}
