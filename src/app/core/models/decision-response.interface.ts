export interface DecisionResponse {
  id: number;
  name: string;
  date: Date;
  fileNumber: string;
  defendantName: string;
  decisionNumber: string;
  stage: string;
  emitterInstitution: string;
  historicalStageId: number;
}
