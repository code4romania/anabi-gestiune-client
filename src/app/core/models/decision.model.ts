import { DecisionResponse } from './decision-response.interface';
import { Stage } from './stage.model';

export class Decision {
  id: number;
  name: string;
  possibleStages: Stage[];

  constructor(aData?: DecisionResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: DecisionResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
  }
}
