import Image from "next/image";

import styles from "./card-post.module.scss";
import { IPost } from "@/interfaces";
import { Avatar } from "../Avatar";
import Link from "next/link";

interface CardPostProps {
  post: IPost;
  highlight?: boolean;
}

export const CardPost = ({ post, highlight = false }: CardPostProps) => {
  return (
    <Link className={styles.link} href={`/posts/${post.slug}`}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image alt={post.title} src={post.cover} fill />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
