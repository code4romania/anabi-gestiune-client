import { CountyResponse } from './county-response.interface';

export class County {
  id: number;
  name: string;
  abbreviation: string;

  constructor(aData?: CountyResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: CountyResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.abbreviation = aJson.abreviation;
  }

  toJson(): CountyResponse {
    return {
      id: this.id,
      name: this.name,
      abreviation: this.abbreviation,
    };
  }
}
