import * as moment from 'moment';
import { EvaluationCommitteeResponse } from './index';

export class EvaluationCommittee {
  evaluationCommitteeDesignationDate: moment.Moment;
  evaluationCommitteePresident: string;
  evaluationCommitteeMembers: string;

  constructor(aData?: EvaluationCommitteeResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: EvaluationCommitteeResponse) {
    this.evaluationCommitteeDesignationDate = moment(aJson.evaluationCommitteeDesignationDate);
    this.evaluationCommitteePresident = aJson.evaluationCommitteePresident;
    this.evaluationCommitteeMembers = aJson.evaluationCommitteeMembers;
  }

  toJson(): EvaluationCommitteeResponse {
    return {
      evaluationCommitteeDesignationDate: this.evaluationCommitteeDesignationDate.format(),
      evaluationCommitteePresident: this.evaluationCommitteePresident,
      evaluationCommitteeMembers: this.evaluationCommitteeMembers,
    } as EvaluationCommitteeResponse;
  }
}
