import { Defendant } from './defendant.model';

export interface DefendantPayload {
  id: number;
  defendants: Defendant[];
}
