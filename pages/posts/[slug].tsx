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
  const post = typeof slug === "string" ? data[slug] : undefined;

  if (!post) return { props: { post: undefined } };

  const content = readFileSync(`${DATA_POSTS_PATH}/${slug}.md`).toString();

  return { props: { post: { ...post, content } } };
};

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [{ y }, _] = useWindowScroll();
  const yScroll = y ?? 0;
  if (!post) return <div>Post not found</div>;

  return (
    <Page>
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
      <div style={{ position: "relative", height: 280, width: "100%" }}>
        <Image
          src="/assets/posts/typescript-algebraic-data-types.webp"
          alt="post header image"
          fill={true}
          style={{ objectFit: "cover", objectPosition: `center ${60 - yScroll / 30}%` }}
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
