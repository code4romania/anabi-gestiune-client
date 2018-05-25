export class Stage {
  id: number;
  name: string;
  isFinala: boolean;

  constructor(id: number, name: string, isFinala: boolean) {
    this.id = id;
    this.name = name;
    this.isFinala = isFinala;
  }
}
