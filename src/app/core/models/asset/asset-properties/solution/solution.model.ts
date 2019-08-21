import * as moment from 'moment';

import { Decision, IDecision } from '../../../decision.model';
import { Institution, IInstitution } from '../../../institution.model';
import { IJournal, Journal } from '../../../journal.model';
import { IStage, Stage } from '../../../stage.model';
import { Asset, IAsset } from '../../asset.model';
import { IRecoveryDetails, RecoveryDetails } from './recovery-details.model';

import { AssetProperty, AssetPropertyType } from '../../asset-property.model';

import { ISolutionDetails, SolutionDetails } from './solution-details.model';
import { ConfiscationDetailsResponse, SequesterDetailsResponse } from './solution-response.interface';

export interface ISolution {
  id: number;
  stageId: number;
  decisionId: number;
  institutionId: number;
  decisionDate: string;
  decisionNumber: string;
  institution: IInstitution;
  decision: IDecision;
  stage: IStage;
  confiscationDetails: ConfiscationDetailsResponse;
  sequesterDetails: SequesterDetailsResponse;
  recoveryDetails: IRecoveryDetails;
  solutionDetails: ISolutionDetails;
  journal: IJournal;
  asset: IAsset;
  assetId: number;
}

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

  constructor(aData?: ISolution) {
    super(AssetPropertyType.Solution);

    if (aData) {
      this.fromJson(aData);
    }
  }

  setInstitution(aInstitution: Institution) {
    this.institution = aInstitution;
    this.institutionId = aInstitution.businessId;
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

  fromJson(aJson: ISolution) {
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

    this.asset = aJson.asset ? new Asset(aJson.asset) : undefined;
    this.assetId = aJson.assetId;
  }

  toJson(): ISolution {
    return {
      id: this.id,
      stageId: this.stageId,
      decisionId: this.decisionId,
      institutionId: this.institutionId,
      stage: this.stage ? this.stage.toJson() : {},
      decision: this.decision ? this.decision.toJson() : {},
      institution: this.institution ? this.institution.toJson() : {},
      decisionDate: this.decisionDate ? this.decisionDate.format() : '',
      decisionNumber: this.decisionNumber,
      confiscationDetails: this.confiscationDetails,
      sequesterDetails: this.sequesterDetails,
      recoveryDetails: this.recoveryDetails ? this.recoveryDetails.toJson() : {},
      solutionDetails: this.solutionDetails ? this.solutionDetails.toJson() : {},
      journal: this.journal ? this.journal.toJson() : {},
      asset: this.getAsset() ? this.getAsset().toJson() : {},
      assetId: this.getAssetId(),
    } as ISolution;
  }
}
