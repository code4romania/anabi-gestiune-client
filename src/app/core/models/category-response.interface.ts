export interface CategoryResponse {
  id: number;
  code: string;
  description: string;
  parentId: number;
  parent: number;
  forEntity?: string;
}
