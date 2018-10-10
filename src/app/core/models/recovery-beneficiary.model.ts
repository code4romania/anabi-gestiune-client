import { RecoveryBeneficiaryResponse } from './recovery-beneficiary-response.interface';

export class RecoveryBeneficiary {
  id: number;
  name: string;

  constructor(aData?: RecoveryBeneficiaryResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: RecoveryBeneficiaryResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
  }

  toJson(): RecoveryBeneficiaryResponse {
    return {
      id: this.id,
      name: this.name,
    } as RecoveryBeneficiaryResponse;
  }
}
