import { RecoveryDetailsResponse, SolutionDetailsResponse } from '../../';
import { JournalResponse } from '../../../';
import { ConfiscationDetailsResponse, SequesterDetailsResponse } from './solution-response.interface';

export interface SolutionRequest {
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
