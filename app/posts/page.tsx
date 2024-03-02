import { Metadata } from "next";
import { Card, Header, ItemList } from "../../components";
import { Content, Page } from "../../components/layout";
import { Post, posts as data } from "../../data/posts_list";

type PostWithSlug = Post & {
  slug: string;
};
const title = "Matteo Pellegrino's Posts";
const description = "Posts about software engineering, web development, and more";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@mttpll",
    creator: "@mttpll",
    description,
    images: [
      {
        url: `/assets/og/mailbox-emoji.png`,
        width: 80,
        height: 80,
      },
    ],
  },
};

export default function Posts() {
  const posts: Array<PostWithSlug> = Object.entries(data).map(([k, v]) => ({ ...v, slug: k }));
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
