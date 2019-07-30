export class DecisionSummary {
    id: number;
    defendantName: string;
    decisionNumber: string;
    fileNumber: string;
    stage: string;
    assetId: number;

    constructor(
      id: number,
      defendantName: string,
      decisionNumber: string,
      fileNumber: string,
      stage: string,
      assetId: number
    ) {
        this.id = id;
        this.defendantName = defendantName;
        this.decisionNumber = decisionNumber;
        this.fileNumber = fileNumber;
        this.stage = stage;
        this.assetId = assetId;
    }
}
