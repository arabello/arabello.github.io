import Link from "next/link";
import { Post } from "../data/posts_list";
import { Card } from "./Card";

export type PostWithSlug = Post & {
  slug: string;
};

export const PostsCard = ({ posts }: { posts: PostWithSlug[] }) => (
  <Card>
    <div className="fs-5">👨‍💻 Latest posts</div>
    <div className="list-group-flush mt-3">
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`} className="fs-6 list-group-item">
          {post.title}
        </Link>
      ))}
    </div>
  </Card>
);
