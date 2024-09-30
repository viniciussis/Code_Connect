import Image from "next/image";

import styles from "./card-post.module.scss";
import { IPost } from "@/interfaces";
import { Avatar } from "../Avatar";
import Link from "next/link";

interface CardPostProps {
  post: IPost;
}

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <Link className={styles.link} href={`/posts/${post.slug}`}>
      <article className={styles.card}>
        <header className={styles.header}>
          <Image alt={post.title} src={post.cover} width={438} height={133} />
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
