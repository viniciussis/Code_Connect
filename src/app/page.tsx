import { CardPost } from "@/components/CardPost";
import postsData from "../../public/posts.json";
import { IPost } from "@/interfaces";

export default function Home() {
  return (
    <main>
      {postsData.posts.map((post: IPost) => (
        <CardPost post={post} key={post.id} />
      ))}
    </main>
  );
}
