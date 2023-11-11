import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeaderCard, ContactsCard, ProjectCard } from "../components";
import { BookPreview, ReadingListCard } from "../components/ReadingListCard";
import {
  Book,
  currentBook,
  lastBook,
  secondLastBook,
} from "../data/reading_list";

export const getStaticProps: GetStaticProps<{
  bookPreview: {
    current: BookPreview;
    last: BookPreview;
    secondLast: BookPreview;
  };
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

  return {
    props: {
      bookPreview: {
        current: await makeCover(currentBook),
        last: await makeCover(lastBook),
        secondLast: await makeCover(secondLastBook),
      },
    },
  };
};

export default function Index({
  bookPreview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const contacts = <ContactsCard />;
  const espanso = (
    <ProjectCard
      href="https://hub.espanso.org"
      header={
        <Image
          src="/assets/espansohub.svg"
          width={64}
          height={64}
          alt="espansohub logo icon"
        />
      }
    >
      Espanso is a privacy-first cross-platform text expander.
      <span className="fw-bolder text-primary"> Espanso Hub</span> is the
      official web application, built using Nextjs SSG technology, to search and
      explore Espanso packages.
    </ProjectCard>
  );
  const nightFocus = (
    <ProjectCard
      href="https://matteopellegrino.dev/night-focus"
      header={
        <Image src="/assets/moon.png" width={64} height={64} alt="moon icon" />
      }
    >
      I love to immerse myself with ambient sounds while coding or reading. I
      sought a customizable auditory experience, with a picky user experience
      that would reconcile my focus.{" "}
      <span className="fw-bolder text-primary"> Night Focus</span> helps me get
      into the Flow State.
    </ProjectCard>
  );
  const readingListCard = <ReadingListCard {...bookPreview} />;
  return (
    <div className="min-vh-100">
      <div className="bg-gradient-custom"></div>
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

      <div className="min-vh-100 container-centered d-flex flex-column p-3 pt-4">
        <HeaderCard
          heading="Matteo Pellegrino"
          subheading="Software Engineer, Electronic Music Nerd"
          avatar={(size) => (
            <Image
              className="rounded-circle avatar"
              src="/assets/profile.jpg"
              alt="profile picture"
              {...size}
            />
          )}
          icon={(size) => (
            <a type="button" href="https://github.com/arabello" target="blank">
              <Image
                src="/assets/icons/github.svg"
                alt="github icon link"
                {...size}
              />
            </a>
          )}
        />

        <div className="row flex-grow-1">
          {/* Tablet and Desktop */}
          <div className="col d-none d-md-block">
            {contacts}
            {espanso}
          </div>

          {/* Mobile */}
          <div className="col d-none d-md-block">
            {nightFocus}
            {readingListCard}
          </div>
          <div className="col d-md-none">
            {contacts}
            {espanso}
            {nightFocus}
            {readingListCard}
          </div>
        </div>
      </div>
    </div>
  );
}
