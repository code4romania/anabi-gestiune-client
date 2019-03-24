import { StageResponse } from './stage-response.interface';

export enum StageType {
  Confiscare = 'confiscare',
  Sechestru = 'sechestru',
  ValorificareAnticipata = 'valorificare anticipata',
  ValorificareStandard = 'valorificare standard',
}

export class Stage {
  id: number;
  name: string;
  isFinal: boolean;
  isRecovery: boolean;

  constructor(aData?: StageResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  getTitle(): string {
    return this.name ? this.name.toLowerCase() : undefined;
  }

  fromJson(aJson: StageResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.isFinal = aJson.isFinal;
    this.isRecovery = aJson.isRecovery;
  }

  toJson(): StageResponse {
    return {
      id: this.id,
      name: this.name,
      isFinal: this.isFinal,
      isRecovery: this.isRecovery,
    } as StageResponse;
  }
}
