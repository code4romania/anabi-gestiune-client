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

export const PERSOANA_FIZICA = 'Persoană Fizică';
export const PERSOANA_JURIDICA = 'Persoană Juridică';
export const ROMANIA = 'Romania';
