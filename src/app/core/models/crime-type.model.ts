export interface ICrimeType {
  id: number;
  name: string;
}

export class CrimeType {
  id: number;
  name: string;

  constructor(aData?: ICrimeType) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: ICrimeType) {
    this.id = aJson.id;
    this.name = aJson.name;
  }

  toJson(): ICrimeType {
    return {
      id: this.id,
      name: this.name,
    } as ICrimeType;
  }
}
