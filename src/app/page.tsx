import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import { IPost } from "@/interfaces";
import logger from "@/logger";
import Link from "next/link";

async function getPosts(page: string) {
  const resp = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!resp.ok) {
    logger.error("Error fetching posts...");
    return [];
  }
  logger.info("Posts fetched successfully!");
  return resp.json();
}

interface HomeProps {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams?.page || "1";
  const { data: posts, prev, next } = await getPosts(currentPage);

  return (
    <main className={styles.grid}>
      {posts.map((post: IPost) => (
        <CardPost post={post} key={post.id} />
      ))}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
      </div>
    </main>
  );
}
