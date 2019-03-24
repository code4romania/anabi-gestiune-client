export class DefendantForm {
    defendantType: string;
    pf: {
        pfLastName: string;
        pfFirstName: string;
        pfNationality: string;
        pfIdentifierType: number;
        pfIdentifier: string;
        pfBirthDate: string;
    };
    pj: {
        pjName: string;
        pjCountry: string;
        pjIdentifierType: number;
        pjIdentifier: string;
    };
}

export enum DefendantType {
  Person = 'Persoană Fizică',
  Company = 'Persoană Juridică',
}

export const ROMANIA = 'Romania';
