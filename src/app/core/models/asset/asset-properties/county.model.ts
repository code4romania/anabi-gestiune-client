import { CountyResponse } from './county-response.interface';

export interface ICounty {
  id: number;
  name: string;
  abbreviation: string;
}

export class County {
  id: number;
  name: string;
  abbreviation: string;

  constructor(aData?: ICounty) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: ICounty) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.abbreviation = aJson.abbreviation;
  }

  fromResponse(aJson: CountyResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.abbreviation = aJson.abreviation;
  }

  toJson(): ICounty {
    return {
      id: this.id,
      name: this.name,
      abbreviation: this.abbreviation,
    }
  }

  toRequest(): CountyResponse {
    return {
      id: this.id,
      name: this.name,
      abreviation: this.abbreviation,
    };
  }
}
