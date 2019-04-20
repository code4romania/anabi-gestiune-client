export interface IIdentifier {
  id: number;
  identifierType: string;
  isForCompany: boolean;
}

export class Identifier {
  id: number;
  identifierType: string;
  isForCompany: boolean;

  constructor(aData?: IIdentifier) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: IIdentifier) {
    this.id = aJson.id;
    this.identifierType = aJson.identifierType;
    this.isForCompany = aJson.isForCompany;
  }

  toJson(): IIdentifier {
    return {
      id: this.id,
      identifierType: this.identifierType,
      isForCompany: this.isForCompany,
    };
  }
}
