import { EvaluationCommitteeResponse, RecoveryCommitteeResponse } from './index';

export interface RecoveryDetailsResponse {
  actualAmount: number;
  estimatedAmount: number;
  estimatedAmountCurrency: string;
  actualAmountCurrency: string;
  recoveryState: string;
  evaluationCommittee: EvaluationCommitteeResponse;
  recoveryCommittee: RecoveryCommitteeResponse;
  lastActivity: string;
  personResponsible: string;
}
