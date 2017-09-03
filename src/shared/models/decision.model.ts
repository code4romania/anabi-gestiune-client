import {Stage} from 'shared/models/stage.model'

export class Decision {
  id: number;
  name: string;
  possibleStages: Stage[];

  constructor(id: number, name: string, possibleStages: Stage[]) {
    this.id = id;
    this.name = name;
    this.possibleStages = possibleStages;
  }
}
