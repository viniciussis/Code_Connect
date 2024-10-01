import { IPost } from "@/interfaces";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.scss";
import logger from "@/logger";
import { CardPost } from "@/components/CardPost";

async function getPostBySlug(slug: string): Promise<IPost | null> {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    logger.error("Error fetching posts...");
    return null;
  }
  logger.info("Posts fetched successfully!");
  const data: IPost[] = await resp.json();
  if (data.length === 0) {
    return null;
  }
  const post = data[0];

  const processedPost = await remark().use(html).process(post.markdown);
  const htmlPost = processedPost.toString();
  post.markdown = htmlPost;
  return post;
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
      <CardPost post={post} />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown || "" }} />
      </div>
    </div>
  );
};

export default Post;
