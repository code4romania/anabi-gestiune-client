import { Address } from 'shared/models/address.model';
import { Category } from 'shared/models/category.model';
import { Journal } from 'shared/models/journal.model';

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
