import { PrecautionaryMeasureResponse } from './precautionary-measure-response.interface';

export class PrecautionaryMeasure {
  id: number;
  measureType: number;
  name: string;

  constructor(aData?: PrecautionaryMeasureResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: PrecautionaryMeasureResponse) {
    this.id = aJson.id;
    this.measureType = aJson.measureType;
    this.name = aJson.name;
  }

  toJson(): any {
    return {
      id: this.id,
      measureType: this.measureType,
      name: this.name,
    };
  }
}
