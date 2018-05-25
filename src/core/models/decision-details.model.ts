export class DecisionDetails {
  decizieId: number;
  decisionName: string;

  assetId: number;
  assetUniqueIdentifier: string;
  assetState: string;

  ownerId: number;
  ownerName: string;

  institutionId: number;
  institutionName: string;

  estimatedAmount: number;
  estimatedAmountCurrency: string;
  actualValue: number;
  actualValueCurrency: string;

  legalBasis: string;
  decisionNumber: string;
  decisionDate: Date;

  userCodeAdd: string;
  userCodeLastChange: string;
  addedDate: Date;
  lastChangeDate: Date;

  stageId: number;
  stageName: string;

  constructor() {}
}
