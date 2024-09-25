import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import { IPost } from "@/interfaces";
import logger from "@/logger";

async function getPosts() {
  const resp = await fetch("http://localhost:3042/posts");
  if (!resp.ok) {
    logger.error("Error fetching posts...");
    return [];
  }
  logger.info("Posts fetched successfully!");
  return resp.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.grid}>
      {posts.map((post: IPost) => (
        <CardPost post={post} key={post.id} />
      ))}
    </main>
  );
}
