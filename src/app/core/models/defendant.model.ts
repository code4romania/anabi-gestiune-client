import { DefendantConfig, DefendantForm } from './defendant-form.model';

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
        
    }

}
