import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import { IPost } from "@/interfaces";
import prisma from "../../prisma/db";
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page: number, search: string) {
  try {
    let where = {};
    if (search) {
      where = Object.assign(where, {
        title: {
          contains: search,
          mode: "insensitive",
        },
      });
    }
    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await prisma.post.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;
    const posts = await prisma.post.findMany({
      select: {
        authorId: true,
        body: true,
        title: true,
        cover: true,
        slug: true,
        markdown: true,
        id: true,
        author: true,
      },
      take: perPage,
      orderBy: {
        createdAt: "asc",
      },
      where,
      skip,
    });
    return { data: posts, prev, next };
  } catch (error) {
    logger.error("Error getting all posts!", { error });
    return { data: [], prev: null, next: null };
  }
}

interface HomeProps {
  searchParams: {
    page?: string;
    search?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams?.page || "1";
  const searchTerm = searchParams?.search || "";
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(Number(currentPage), searchTerm);

  return (
    <main className={styles.grid}>
      {posts.map((post: IPost) => (
        <CardPost post={post} key={post.id} />
      ))}
      <div className={styles.links}>
        {prev && (
          <Link
            href={{ pathname: "/", query: { page: prev, search: searchTerm } }}
          >
            Página Anterior
          </Link>
        )}
        {next && (
          <Link
            href={{ pathname: "/", query: { page: next, search: searchTerm } }}
          >
            Próxima Página
          </Link>
        )}
      </div>
    </main>
  );
}
