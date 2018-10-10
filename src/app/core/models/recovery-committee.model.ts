import * as moment from 'moment';
import { RecoveryCommitteeResponse } from './index';

export class RecoveryCommittee {
  recoveryCommitteeDesignationDate: moment.Moment;
  recoveryCommitteePresident: string;
  recoveryCommitteeMembers: string;

  constructor(aData?: RecoveryCommitteeResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: RecoveryCommitteeResponse) {
    this.recoveryCommitteeDesignationDate = moment(aJson.recoveryCommitteeDesignationDate, moment.ISO_8601);
    this.recoveryCommitteePresident = aJson.recoveryCommitteePresident;
    this.recoveryCommitteeMembers = aJson.recoveryCommitteeMembers;
  }

  toJson(): RecoveryCommitteeResponse {
    return {
      recoveryCommitteeDesignationDate: this.recoveryCommitteeDesignationDate ? this.recoveryCommitteeDesignationDate.format() : '',
      recoveryCommitteePresident: this.recoveryCommitteePresident,
      recoveryCommitteeMembers: this.recoveryCommitteeMembers,
    } as RecoveryCommitteeResponse;
  }
}
