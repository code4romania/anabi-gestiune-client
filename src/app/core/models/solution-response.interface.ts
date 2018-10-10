import {
  JournalResponse,
  RecoveryDetailsResponse,
  SolutionDetailsResponse,
} from './index';

export interface SolutionResponse {
  id: number;
  stageId: number;
  decisionId: number;
  institutionId: number;
  decisionDate: string;
  decisionNumber: string;
  confiscationDetails: ConfiscationDetailsResponse;
  sequesterDetails: SequesterDetailsResponse;
  recoveryDetails: RecoveryDetailsResponse;
  solutionDetails: SolutionDetailsResponse;
  journal: JournalResponse;
}

export interface ConfiscationDetailsResponse {
  recoveryBeneficiaryId: number;
}

export interface SequesterDetailsResponse {
  precautionaryMeasureId: number;
}
