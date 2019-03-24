import { JournalResponse } from './journal-response.interface';

export interface DefendantResponse {
  idNumber: string;
  idSerie: string;
  identification: string;
  isPerson: boolean;
  name: string;
  birthdate: string;
  firstName: string;
  identifierId: number;
  nationality: string;
  id: number;
  journal: JournalResponse;
}
