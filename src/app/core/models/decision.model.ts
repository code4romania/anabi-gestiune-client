export interface IDecision {
  id: number;
  name: string;
}

export class Decision {
  id: number;
  name: string;

  constructor(aData?: IDecision) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IDecision) {
    this.id = aJson.id;
    this.name = aJson.name;
  }

  toJson(): IDecision {
    return {
      id: this.id,
      name: this.name,
    } as IDecision;
  }
}
