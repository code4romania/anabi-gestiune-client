import { CrimeTypeResponse } from './crime-type-response.interface';

export class CrimeType {
  id: number;
  name: string;

  constructor(aData?: CrimeTypeResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: CrimeTypeResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
  }

  toJson(): CrimeTypeResponse {
    return {
      id: this.id,
      name: this.name,
    } as CrimeTypeResponse;
  }
}
