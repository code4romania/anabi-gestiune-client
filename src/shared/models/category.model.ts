export class Category {
  id: number;
  code: string;
  description: string;
  parentId: number;
  parent: Category;
  forEntity: string;

  constructor(id: number, code: string, description?: string, parentId?: number, parent?: Category, forEntity?: string) {
    this.id = id;
    this.code = code;
    this.description = description;
    this.parentId = parentId;
    this.parent = parent;
    this.forEntity = forEntity;
  }
}
