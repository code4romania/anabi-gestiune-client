export class DefendantForm {
    defendantType: string;
    pf: {
        pfLastName: string;
        pfFirstName: string;
        pfNationality: string;
        pfIdentifier: string;
        pfBirthDate: string;
    };
    pj: {
        pjName: string;
        pjCountry: string;
        pjIdentifier: string;
    };
}

export enum DefendantType {
  Person = 'Persoană Fizică',
  Company = 'Persoană Juridică',
}

export const ROMANIA = 'Romania';
