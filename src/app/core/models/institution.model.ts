export interface IInstitution {
  id: number;
  name: string;
  contactData: string;
}

export class Institution {
  id: number;
  name: string;
  contactData: string;

  constructor(aData?: IInstitution) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IInstitution) {
    this.id = aJson.id;
    this.name = aJson.name;
    this.contactData = aJson.contactData;
  }

  toJson(): IInstitution {
    return {
      id: this.id,
      name: this.name,
      contactData: this.contactData,
    };
  }
}
