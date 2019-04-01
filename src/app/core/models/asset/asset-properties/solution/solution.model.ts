import * as moment from 'moment';

import { Decision } from '../../../decision.model';
import { Institution } from '../../../institution.model';
import { Journal } from '../../../journal.model';
import { Stage } from '../../../stage.model';
import { RecoveryDetails } from './recovery-details.model';

import { AssetProperty, AssetPropertyType } from '../../asset-property.model';

import { SolutionDetails } from './solution-details.model';
import { SolutionRequest } from './solution-request.interface';
import {
  ConfiscationDetailsResponse,
  SequesterDetailsResponse,
  SolutionResponse
} from './solution-response.interface';

export class Solution extends AssetProperty {
  id: number;
  stageId: number;
  decisionId: number;
  institutionId: number;
  decisionDate: moment.Moment;
  decisionNumber: string;

  private institution: Institution;
  private decision: Decision;
  private stage: Stage;

  confiscationDetails: ConfiscationDetailsResponse;
  sequesterDetails: SequesterDetailsResponse;
  recoveryDetails: RecoveryDetails = new RecoveryDetails();
  solutionDetails: SolutionDetails = new SolutionDetails();
  journal: Journal = new Journal();

  constructor(aData?: SolutionResponse) {
    super(AssetPropertyType.Solution);

    if (aData) {
      this.fromJson(aData);
    }
  }

  setInstitution(aInstitution: Institution) {
    this.institution = aInstitution;
    this.institutionId = aInstitution.id;
  }

  getInstitution(): Institution {
    return this.institution;
  }

  setDecision(aDecision: Decision) {
    this.decision = aDecision;
    this.decisionId = aDecision.id;
  }

  getDecision(): Decision {
    return this.decision;
  }

  setStage(aStage: Stage) {
    this.stage = aStage;
    this.stageId = aStage.id;
  }

  getStage(): Stage {
    return this.stage;
  }

  setSolutionDetails(aSolutionDetails: SolutionDetails) {
    this.solutionDetails = aSolutionDetails;
  }

  fromJson(aJson: SolutionResponse) {
    this.id = aJson.id;
    this.stageId = aJson.stageId;
    this.decisionId = aJson.decisionId;
    this.institutionId = aJson.institutionId;
    this.decisionDate = moment(aJson.decisionDate, moment.ISO_8601);
    this.decisionNumber = aJson.decisionNumber;

    this.confiscationDetails = {
      recoveryBeneficiaryId: aJson.confiscationDetails.recoveryBeneficiaryId,
    };

    this.sequesterDetails = {
      precautionaryMeasureId: aJson.sequesterDetails.precautionaryMeasureId,
    };

    this.recoveryDetails = new RecoveryDetails(aJson.recoveryDetails);
    this.solutionDetails = new SolutionDetails(aJson.solutionDetails);
    this.journal = new Journal(aJson.journal);
  }

  toJson(): SolutionRequest {
    return {
      id: this.id,
      stageId: this.stageId,
      decisionId: this.decisionId,
      institutionId: this.institutionId,
      decisionDate: this.decisionDate ? this.decisionDate.format() : '',
      decisionNumber: this.decisionNumber,
      confiscationDetails: this.confiscationDetails,
      sequesterDetails: this.sequesterDetails,
      recoveryDetails: this.recoveryDetails.toJson(),
      solutionDetails: this.solutionDetails.toJson(),
      journal: this.journal.toJson(),
    } as SolutionResponse;
  }
}
