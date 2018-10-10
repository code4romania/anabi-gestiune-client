import { Address } from './address.model';
import { Category } from './category.model';
import { InstitutionResponse } from './institution-response.interface';

export class Institution {
  id: number;
  categoryId: number;
  category: Category;
  name: string;
  address: Address;

  constructor(aData?: InstitutionResponse) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  setCategory(aCategory: Category) {
    this.category = aCategory;
  }

  fromJson(aJson: InstitutionResponse) {
    this.id = aJson.id;
    this.categoryId = aJson.categoryId;
    this.name = aJson.name;
    this.address = new Address(aJson.address);
  }
}
