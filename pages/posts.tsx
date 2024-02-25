import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Card, Header } from "../components";
import { Content, Page } from "../components/layout";
import { Post, posts as data } from "../data/posts_list";
import { ItemList } from "../components/ItemList";

type PostWithSlug = Post & {
  slug: string;
};

export const getStaticProps: GetStaticProps<{
  posts: Array<PostWithSlug>;
}> = () => {
  const posts = Object.entries(data).map(([k, v]) => ({ ...v, slug: k }));
  return { props: { posts } };
};

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const items = posts.map((p) => ({
    title: p.title,
    subtitle: p.lastUpdate,
    caption: p.description,
    image: {
      src: `/assets/posts/${p.slug}.webp`,
      alt: "post image",
      width: 90,
      height: 60,
    },
    link: {
      href: `/posts/${p.slug}`,
    },
  }));
  return (
    <Page>
      <Content>
        <Header
          heading="Posts"
          actions={{
            right: {
              src: "/assets/icons/home.svg",
              alt: "home icon link",
              href: "/",
            },
          }}
        />
        <Card>
          <ItemList items={items} />
        </Card>
      </Content>
    </Page>
  );
}
