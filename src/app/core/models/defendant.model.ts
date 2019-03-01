import { DefendantForm, PERSOANA_FIZICA } from './defendant-form.model';

export class Defendant {
    idNumber: string;
    idSerie: string;
    identification: string;
    isPerson: boolean;
    name: string;
    birthdate: string;
    firstName: string;
    identifierId: number;
    nationality: string;

    constructor(form?: DefendantForm) {
        // TODO: map DefendantForm to Defendant
        if (form !== undefined) {
            if (form.defendantType === PERSOANA_FIZICA) {
                this.isPerson = true;
                this.name = form.pf.pfLastName;
                this.firstName = form.pf.pfFirstName;
                this.nationality = form.pf.pfNationality;
                this.identification = form.pf.pfIdentifier;
                this.birthdate = form.pf.pfBirthDate;
            } else {
                this.isPerson = false;
                this.name = form.pj.pjName;
                this.nationality = form.pj.pjCountry;
                this.identification = form.pj.pjIdentifier;
            }
        } else {
            this.isPerson = true;
        }
    }

}
