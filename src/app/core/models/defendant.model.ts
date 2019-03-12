import { AssetProperty, AssetPropertyType } from './asset-property.model';
import { DefendantForm, DefendantType } from './defendant-form.model';

export class Defendant extends AssetProperty {
  id: number;
  idNumber: string;
  idSerie: string;
  identification: string;
  isPerson: boolean;
  name: string;
  birthdate: string;
  firstName: string;
  identifierId: number;
  nationality: string;

  constructor(aData?: any) {
    super(AssetPropertyType.Defendant);

    if (aData) {
      this.fromJson(aData);
    }
  }

  fromJson(aJson: any) {
    this.id = aJson.id;
    this.idNumber = aJson.idNumber;
    this.idSerie = aJson.idSerie;
    this.identification = aJson.identification;
    this.isPerson = aJson.isPerson;
    this.name = aJson.name;
    this.birthdate = aJson.birthdate;
    this.firstName = aJson.firstName;
    this.identifierId = aJson.identifierId;
    this.nationality = aJson.nationality;
  }

  fromForm(aForm: DefendantForm) {
    if (aForm !== undefined) {
      if (aForm.defendantType === DefendantType.Person) {
        this.isPerson = true;
        this.name = aForm.pf.pfLastName;
        this.firstName = aForm.pf.pfFirstName;
        this.nationality = aForm.pf.pfNationality;
        this.identification = aForm.pf.pfIdentifier;
        this.birthdate = aForm.pf.pfBirthDate;
      } else {
        this.isPerson = false;
        this.name = aForm.pj.pjName;
        this.nationality = aForm.pj.pjCountry;
        this.identification = aForm.pj.pjIdentifier;
      }
    } else {
      this.isPerson = true;
    }
  }

  toJson(): any {
    return {
      id: this.id,
      idNumber: this.idNumber,
      idSerie: this.idSerie,
      identification: this.identification,
      isPerson: this.isPerson,
      name: this.name,
      birthdate: this.birthdate,
      firstName: this.firstName,
      identifierId: this.identifierId,
      nationality: this.nationality,
    };
  }
}
