export interface IPrecautionaryMeasure {
  id: number;
  measureType: number;
  name: string;
}

export class PrecautionaryMeasure {
  id: number;
  measureType: number;
  name: string;

  constructor(aData?: IPrecautionaryMeasure) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IPrecautionaryMeasure) {
    this.id = aJson.id;
    this.measureType = aJson.measureType;
    this.name = aJson.name;
  }

  toJson(): IPrecautionaryMeasure {
    return {
      id: this.id,
      measureType: this.measureType,
      name: this.name,
    };
  }
}
