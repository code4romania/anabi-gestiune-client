export class DecisionSummary {
    number: string;
    date: Date;
    fileNumber: string;
    emitterInstitution: string;
    historicalStageId: number;

    constructor(number: string, date: Date, fileNumber: string, emitterInstitution: string, historicalStageId: number) {
        this.number = number;
        this.date = date;
        this.fileNumber = fileNumber;
        this.emitterInstitution = emitterInstitution;
        this.historicalStageId = historicalStageId;
    }
}
