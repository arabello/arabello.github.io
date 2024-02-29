import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Header,
  ContactsCard,
  ProjectCard,
  PostsCard,
  BookPreview,
  ReadingListCard,
  PostWithSlug,
} from "../components";
import { Book, currentBook, lastBook, secondLastBook } from "../data/reading_list";
import { Content, Page } from "../components/layout";
import { posts } from "../data/posts_list";

export const getStaticProps: GetStaticProps<{
  bookPreview: {
    current: BookPreview;
    last: BookPreview;
    secondLast: BookPreview;
  };
  postsPreview: PostWithSlug[];
}> = async () => {
  const makeCover: (book: Book) => Promise<BookPreview> = (book: Book) =>
    !book.isbn
      ? Promise.resolve(book)
      : fetch(`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`)
          .then((r) => r.arrayBuffer())
          .then((buff) => ({
            ...book,
            base64img: Buffer.from(buff).toString("base64"),
          }));

  const postsPreview = Object.entries(posts).map(([k, v]) => ({ ...v, slug: k }));

  return {
    props: {
      bookPreview: {
        current: await makeCover(currentBook),
        last: await makeCover(lastBook),
        secondLast: await makeCover(secondLastBook),
      },
      postsPreview,
    },
  };
};

export default function Index({
  bookPreview,
  postsPreview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
    <Page>
      <Head>
        <title>Matteo Pellegrino | Software Engineer</title>
        <meta
          name="description"
          content="Product-oriented Web Software Engineer specialized in full-stack development for 
          scale-ups. I profoundly care about business impact as well as UX & UI while keenly nerding
          on the software architecture and technical details. I thoroughly enjoy bootstrapping and 
          scaling up digital products."
        ></meta>
        <link rel="me" href="https://mastodon.world/@pelle" />
      </Head>

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
    </Page>
  );
}
