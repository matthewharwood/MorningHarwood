export interface WorkPost {
  id: number,
  title: string,
  categories: Array<string>,
  paragraph: string,
  slug: string,
  overview?: Array<any>,
}