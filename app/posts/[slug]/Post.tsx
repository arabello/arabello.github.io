"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import { Card, Footer, Header, Markdown } from "../../../components";
import { Content, Page } from "../../../components/layout";
import { Props } from "./page";

function ParallaxImage({ src }: { src: string }) {
  const [{ y }, _] = useWindowScroll();
  const yScroll = y ?? 0;
  return (
    <div style={{ position: "relative", height: 280, width: "100%" }} className="mt-4 mt-md-0">
      <Image
        src={src}
        alt="post header image"
        fill={true}
        style={{ objectPosition: `center ${60 - yScroll / 30}%` }}
        className="post-header-image"
      />
    </div>
  );
}

export function Post({ post }: Props) {
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
      <ParallaxImage src={`/assets/posts/${post.slug}.webp`} />
      <Content>
        <Card>
          <Markdown content={post.content} />
        </Card>

        <Footer caption="Any feedback or open to discuss?" />
      </Content>
    </Page>
  );
}
