import {Defendant} from '@app/core';

export class DefendantsPayload {
  public id: number;
  public defendants: Defendant[];

  constructor(id: number, defendants: Defendant[]) {
    this.id = id;
    this.defendants = defendants;
  }
}
