import { CardPost } from "@/components/CardPost";
import prisma from "../../../../prisma/db";
import { redirect } from "next/navigation";
import styles from "./page.module.scss";
import { remark } from "remark";
import html from "remark-html";
import logger from "@/logger";

async function getPostBySlug(slug: string) {
  try {
    const post = await prisma.post.findFirst({
      where: { slug },
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
    });

    if (!post) {
      throw new Error(`Post with slug ${slug} not Found!`);
    }

    const processedPost = await remark().use(html).process(post.markdown);
    const htmlPost = processedPost.toString();
    post.markdown = htmlPost;

    return post;
  } catch (error) {
    logger.error("Error getting post!", { error, slug });
  }
  redirect("/not-found");
}

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown || "" }} />
      </div>
    </div>
  );
};

export default Post;
