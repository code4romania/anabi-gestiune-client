import { Address } from './address.model';
import { Category } from './category.model';
import { Journal } from './journal.model';

export class Institution {
  id: number;
  category: Category;
  name: string;
  address: Address;
  journal: Journal;

  constructor(id: number, category: Category, name: string, address: Address, journal: Journal) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.address = address;
    this.journal = journal;
  }
}
