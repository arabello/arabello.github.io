import type { Metadata } from "next";
import Image from "next/image";
import { ContactsCard, Header, PostsCard, ProjectCard, ReadingListCard } from "../components";
import { Content } from "../components/layout";
import { posts } from "../data/posts_list";
import { lastThree } from "../data/reading_list";
import { fetchBookWithCover } from "./fetchBookPreview";

const title = "Matteo Pellegrino";
const description = "Product-oriented Web Software Engineer";

export const metadata: Metadata = {
  title,
  description,
  verification: {
    me: "https://mastodon.world/@pelle",
  },
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
        url: `/assets/og/rocket-emoji.png`,
        width: 80,
        height: 80,
      },
    ],
  },
};

export default async function Index() {
  const lastThreePreview = await Promise.all([
    fetchBookWithCover(lastThree[0]),
    fetchBookWithCover(lastThree[1]),
    fetchBookWithCover(lastThree[2]),
  ]);
  const postsPreview = Object.entries(posts).map(([k, v]) => ({ ...v, slug: k }));
  const contacts = <ContactsCard />;
  const espanso = (
    <ProjectCard
      href="https://hub.espanso.org"
      header={
        <Image src="/assets/espansohub.svg" width={64} height={64} alt="espansohub logo icon" />
      }
    >
      Espanso is a privacy-first cross-platform text expander.
      <span className="fw-bolder text-primary"> Espanso Hub</span> is the official web application,
      built using Nextjs SSG technology, to search and explore Espanso packages.
    </ProjectCard>
  );
  const nightFocus = (
    <ProjectCard
      href="https://matteopellegrino.dev/night-focus"
      header={<Image src="/assets/moon.png" width={64} height={64} alt="moon icon" />}
    >
      I love to immerse myself with ambient sounds while coding or reading. I sought a customizable
      auditory experience, with a picky user experience that would reconcile my focus.{" "}
      <span className="fw-bolder text-primary"> Night Focus</span> helps me get into the Flow State.
    </ProjectCard>
  );
  const readingListCard = <ReadingListCard lastThree={lastThreePreview} />;
  const postsCards = <PostsCard posts={postsPreview} />;

  return (
    <Content>
      <Header
        heading="Matteo Pellegrino"
        subheading="Product-Minded Software Engineer"
        actions={{
          right: {
            href: "https://github.com/arabello",
            target: "_blank",
            src: "/assets/icons/github.svg",
            alt: "github icon link",
          },
        }}
      />

      <div className="row flex-grow-1">
        {/* Tablet and Desktop */}
        <div className="col d-none d-md-block">
          {postsCards}
          {nightFocus}
          {contacts}
        </div>
        <div className="col d-none d-md-block">
          {readingListCard}
          {espanso}
        </div>

        {/* Mobile */}
        <div className="col d-md-none">
          {postsCards}
          {readingListCard}
          {espanso}
          {nightFocus}
          {contacts}
        </div>
      </div>
    </Content>
  );
}
