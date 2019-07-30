export interface IDecision {
  id: number;
  defendantName: string;
  decisionNumber: string;
  fileNumber: string;
  stage: string;
  assetId: number;
}

export class Decision {
  id: number;
  defendantName: string;
  decisionNumber: string;
  fileNumber: string;
  stage: string;
  assetId: number;

  constructor(aData?: IDecision) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IDecision) {
    this.id = aJson.id;
    this.defendantName = aJson.defendantName;
    this.decisionNumber = aJson.decisionNumber;
    this.fileNumber = aJson.fileNumber;
    this.stage = aJson.stage;
    this.assetId = aJson.assetId;
  }

  toJson(): IDecision {
    return {
      id: this.id,
      defendantName: this.defendantName,
      decisionNumber: this.decisionNumber,
      fileNumber: this.fileNumber,
      stage: this.stage,
      assetId: this.assetId,
    } as IDecision;
  }
}
