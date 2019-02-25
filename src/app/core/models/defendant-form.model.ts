export class DefendantForm {
    isPerson: string;
    pf: {
        pfLastName: string;
        pfFirstName: string;
        pfNationality: string;
        pfIdentifier: number;
        pfBirthDate: string;
    };
    pj: {
        pjName: string;
        pjCountry: string;
        pjIdentifier: string;
    };
}

export class DefendantConfig {
    // The only place we need to modify if we don't want diacritics
    static PERSOANA_FIZICA: string = 'Persoană Fizică';
    static PERSOANA_JURIDICA: string = 'Persoană Juridică';
    static ROMANIA: string = 'Romania';
}
