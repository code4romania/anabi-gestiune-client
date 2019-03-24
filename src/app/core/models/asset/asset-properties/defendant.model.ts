import * as moment from 'moment';
import { AssetProperty, AssetPropertyType } from '../asset-property.model';
import { DefendantForm, DefendantType } from './defendant-form.model';

export class Defendant extends AssetProperty {
  id: number;
  idNumber: string;
  idSerie: string;
  identification: string;
  isPerson: boolean;
  name: string;
  birthdate: moment.Moment;
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
    this.birthdate = moment(aJson.birthdate, moment.ISO_8601);
    this.firstName = aJson.firstName;
    this.identifierId = aJson.identifierId;
    this.nationality = aJson.nationality;
    this.assetId = aJson.assetId;
  }

  fromForm(aForm: DefendantForm) {
    if (aForm !== undefined) {
      if (aForm.defendantType === DefendantType.Person) {
        this.isPerson = true;
        this.name = aForm.pf.pfLastName;
        this.firstName = aForm.pf.pfFirstName;
        this.nationality = aForm.pf.pfNationality;
        this.identification = aForm.pf.pfIdentifier;
        this.identifierId = aForm.pf.pfIdentifierType;
        this.birthdate = moment(aForm.pf.pfBirthDate, moment.ISO_8601);
      } else {
        this.isPerson = false;
        this.name = aForm.pj.pjName;
        this.nationality = aForm.pj.pjCountry;
        this.identification = aForm.pj.pjIdentifier;
        this.identifierId = aForm.pj.pjIdentifierType;
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
      birthdate: this.birthdate ? this.birthdate.format() : undefined,
      firstName: this.firstName,
      identifierId: this.identifierId,
      nationality: this.nationality,
      assetId: this.assetId,
    };
  }

  getFormattedBirthDate(): string {
    return this.birthdate ? this.birthdate.format('DD.MM.YYYY') : '';
  }
}
