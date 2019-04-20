export interface IRecoveryBeneficiary {
  id: number;
  name: string;
}

export class RecoveryBeneficiary {
  id: number;
  name: string;

  constructor(aData?: IRecoveryBeneficiary) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IRecoveryBeneficiary) {
    this.id = aJson.id;
    this.name = aJson.name;
  }

  toJson(): IRecoveryBeneficiary {
    return {
      id: this.id,
      name: this.name,
    } as IRecoveryBeneficiary;
  }
}
