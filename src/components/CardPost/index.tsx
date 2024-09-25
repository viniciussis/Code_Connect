import Image from "next/image";

import style from "./card-post.module.scss";
import { IPost } from "@/interfaces";
import { Avatar } from "../Avatar";

interface CardPostProps {
  post: IPost;
}

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <article>
      <header>
        <Image alt={post.title} src={post.cover} />
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
