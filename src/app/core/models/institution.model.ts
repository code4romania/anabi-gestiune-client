export interface IInstitution {
  businessId: number;
  name: string;
  contactData: string;
}

export class Institution {
  businessId: number;
  name: string;
  contactData: string;

  constructor(aData?: IInstitution) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IInstitution) {
    this.businessId = aJson.businessId;
    this.name = aJson.name;
    this.contactData = aJson.contactData;
  }

  toJson(): IInstitution {
    return {
      businessId: this.businessId,
      name: this.name,
      contactData: this.contactData,
    };
  }
}
