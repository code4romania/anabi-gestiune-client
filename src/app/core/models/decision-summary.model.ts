export class DecisionSummary {
    id: number;
    name: string;
    date: Date;
    fileNumber: string;
    defendantName: string;
    decisionNumber: string;
    stage: string;
    emitterInstitution: string;
    historicalStageId: number;

    constructor(
      id: number,
      name: string,
      date: Date,
      fileNumber: string,
      defendantName: string,
      decisionNumber: string,
      stage: string,
      emitterInstitution: string,
      historicalStageId: number
    ) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.fileNumber = fileNumber;
        this.defendantName = defendantName;
        this.decisionNumber = decisionNumber;
        this.stage = stage;
        this.emitterInstitution = emitterInstitution;
        this.historicalStageId = historicalStageId;
    }
}
