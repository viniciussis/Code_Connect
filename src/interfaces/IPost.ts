import { IAuthor } from "./IAuthor";

export interface IPost {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: IAuthor;
}
