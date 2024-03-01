import type { Metadata } from "next";
import Image from "next/image";
import { ContactsCard, Header, PostsCard, ProjectCard, ReadingListCard } from "../components";
import { Content } from "../components/layout";
import { posts } from "../data/posts_list";
import { currentBook, lastBook, secondLastBook } from "../data/reading_list";
import { fetchBookWithCover } from "./fetchBookPreview";

export const metadata: Metadata = {
  title: "Matteo Pellegrino | Software Engineer",
  description:
    "Product-oriented Web Software Engineer specialized in full-stack development for scale-ups. I profoundly care about business impact as well as UX & UI while keenly nerding on the software architecture and technical details. I thoroughly enjoy bootstrapping and scaling up digital products.",
  verification: {
    me: "https://mastodon.world/@pelle",
  },
};

export default async function Index() {
  const bookPreview = {
    current: await fetchBookWithCover(currentBook),
    last: await fetchBookWithCover(lastBook),
    secondLast: await fetchBookWithCover(secondLastBook),
  };

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
  const readingListCard = <ReadingListCard {...bookPreview} />;
  const postsCards = <PostsCard posts={postsPreview} />;

  return (
    <Content>
      <Header
        heading="Matteo Pellegrino"
        subheading="Software Engineer, Electronic Music Nerd"
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
