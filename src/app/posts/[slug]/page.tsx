import { IPost } from "@/interfaces";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

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
  return (
    <>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.markdown }} />
    </>
  );
};

export default Post;
