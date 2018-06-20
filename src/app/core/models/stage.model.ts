export class Stage {
  id: number;
  name: string;
  isFinal: boolean;
  isRecovery: boolean;

  constructor(aData?: any) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: any) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.isFinal = aJson.isFinal;
    this.isRecovery = aJson.isRecovery;
  }
}
