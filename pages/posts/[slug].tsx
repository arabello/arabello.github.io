import Image from "next/image";
import { Content, Page } from "../../components/layout";
import { Card, Header } from "../../components";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post, posts as data } from "../../data/posts_list";
import { useWindowScroll } from "@uidotdev/usehooks";
import { Footer } from "../../components/Footer";
import { Markdown } from "../../components/Markdown";
import { readFileSync } from "fs";
import { join } from "path";

const DATA_POSTS_PATH = join(process.cwd(), "data/posts");

type PostWithContent = Post & {
  content: string;
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.entries(data).map(([k, _]) => ({ params: { slug: k } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: PostWithContent | undefined;
}> = (context) => {
  const slug = context.params ? context.params["slug"] : "";
  if (typeof slug !== "string") return { props: { post: undefined } };

  const post = data[slug];

  if (!post) return { props: { post: undefined } };

  const content = readFileSync(`${DATA_POSTS_PATH}/${slug}.md`).toString();

  return { props: { post: { ...post, content, slug } } };
};

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [{ y }, _] = useWindowScroll();
  const yScroll = y ?? 0;
  if (!post) return <div>Post not found</div>;

  return (
    <Page>
      {/* TODO: temp approach */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mttpll" />
      <meta name="twitter:creator" content="@mttpll" />
      <meta property="og:title" content={post.title} />
      <meta property="og:type" content="image/webp" />
      <meta property="og:url" content={`https://matteopellegrino.dev/posts/${post.slug}`} />
      <meta property="og:image" content={`/assets/posts/${post.slug}.webp`} />
      <meta property="article:published_time" content={post.publishDate} />
      <meta property="article:modified_time" content={post.lastUpdate} />
      <meta property="article:author" content="Matteo Pellegrino" />
      <meta property="article:section" content="Software Engineering" />
      {post.tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}
      <Content>
        <Header
          heading={post.title}
          subheading={post.lastUpdate}
          actions={{
            right: {
              src: "/assets/icons/home.svg",
              alt: "home icon link",
              href: "/",
            },
            left: {
              src: "/assets/icons/chevron-left.svg",
              alt: "back icon link",
              href: "/posts",
            },
          }}
        />
      </Content>
      <div style={{ position: "relative", height: 280, width: "100%" }} className="mt-4 mt-md-0">
        <Image
          src={`/assets/posts/${post.slug}.webp`}
          alt="post header image"
          fill={true}
          style={{ objectPosition: `center ${60 - yScroll / 30}%` }}
          className="post-header-image"
        />
      </div>
      <Content>
        <Card>
          <Markdown content={post.content} />
        </Card>

        <Footer caption="Any feedback or open to discuss?" />
      </Content>
    </Page>
  );
}
