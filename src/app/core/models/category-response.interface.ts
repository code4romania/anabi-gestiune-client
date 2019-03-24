export interface CategoryResponse {
  id: number;
  code: string;
  description: string;
  parentId: number;
  parent?: any;
  forEntity?: string;
}
