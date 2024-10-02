import { IAuthor } from "./IAuthor";

export interface IPost {
  id: string;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  authorId: string;
  author: IAuthor;
}
