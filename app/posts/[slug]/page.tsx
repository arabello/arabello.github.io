import { readFileSync } from "fs";
import { Metadata } from "next";
import { join } from "path";
import { Post, posts as data } from "../../../data/posts_list";
import { Post as PostComponent } from "./Post";
import { BASE_URL } from "../../constants";

const DATA_POSTS_PATH = join(process.cwd(), "data/posts");

type PostWithContent = Post & {
  content: string;
  slug: string;
};

export type Props = {
  post: PostWithContent | undefined;
};

export async function generateStaticParams() {
  return Object.keys(data).map((k) => ({ slug: k }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = data[slug];
  return !post
    ? {}
    : {
        title: post.title,
        description: post.description,
        metadataBase: new URL(BASE_URL),
        openGraph: {
          title: post.title,
          type: "article",
          publishedTime: post.publishDate,
          modifiedTime: post.lastUpdate,
          authors: ["Matteo Pellegrino"],
          section: "Software Engineering",
          tags: post.tags,
          description: post.description,
          images: [
            {
              url: `/assets/posts/${slug}.webp`,
              width: 1200,
              height: 630,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          site: "@mttpll",
          creator: "@mttpll",
          title: post.title,
          description: post.description,
          images: [
            {
              url: `/assets/posts/${slug}.webp`,
              width: 1200,
              height: 630,
            },
          ],
        },
      };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const content = readFileSync(`${DATA_POSTS_PATH}/${slug}.md`).toString();
  const post = {
    ...data[params.slug],
    content,
    slug,
  };
  return <PostComponent post={post} />;
}
