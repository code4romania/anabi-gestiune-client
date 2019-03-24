export class Identifier {
  id: number;
  identifierType: string;
  isForCompany: boolean;

  constructor(aData?: any) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson) {
    this.id = aJson.id;
    this.identifierType = aJson.identifierType;
    this.isForCompany = aJson.isForCompany;
  }

  toJson() {
    return {
      id: this.id,
      identifierType: this.identifierType,
      isForCompany: this.isForCompany,
    };
  }
}
