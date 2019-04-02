import { InstitutionResponse } from './institution-response.interface';

export class Institution {
  id: number;
  name: string;
  contactData: string;

  constructor(aData?: InstitutionResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: InstitutionResponse) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.contactData = aJson.contactData;
  }
}
