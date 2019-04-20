export enum StageType {
  Confiscare = 'confiscare',
  Sechestru = 'sechestru',
  ValorificareAnticipata = 'valorificare anticipata',
  ValorificareStandard = 'valorificare standard',
}

export interface IStage {
  id: number;
  name: string;
  isFinal: boolean;
  isRecovery: boolean;
}

export class Stage {
  id: number;
  name: string;
  isFinal: boolean;
  isRecovery: boolean;

  constructor(aData?: IStage) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  getTitle(): string {
    return this.name ? this.name.toLowerCase() : undefined;
  }

  fromJson(aJson: IStage) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.isFinal = aJson.isFinal;
    this.isRecovery = aJson.isRecovery;
  }

  toJson(): IStage {
    return {
      id: this.id,
      name: this.name,
      isFinal: this.isFinal,
      isRecovery: this.isRecovery,
    } as IStage;
  }
}
