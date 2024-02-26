import Head from "next/head";
import Image from "next/image";
import { Book, books as data } from "../data/reading_list";
import Link from "next/link";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Header, Card } from "../components";
import { Content, Page } from "../components/layout";
import { ItemList } from "../components/ItemList";
import { Footer } from "../components/Footer";

type BookWithCover = Book & {
  base64img?: string;
};

export const getStaticProps: GetStaticProps<{
  books: Array<BookWithCover>;
}> = async () => {
  const promises: Array<Promise<BookWithCover>> = data.map((b) =>
    !b.isbn
      ? Promise.resolve(b)
      : fetch(`https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg`)
          .then((r) => r.arrayBuffer())
          .then((buff) => ({
            ...b,
            base64img: Buffer.from(buff).toString("base64"),
          })),
  );

  const books = await Promise.all(promises);

  return { props: { books } };
};

export default function Books({ books }: InferGetStaticPropsType<typeof getStaticProps>) {
  const items = books.map((b) => ({
    title: b.title,
    subtitle: b.author,
    caption: b.description,
    image: {
      src: b.base64img ? `data:image/png;base64, ${b.base64img}` : "/assets/icons/book.svg",
      width: 60,
      height: 90,
      alt: `${b.title} book cover`,
    },
  }));

  return (
    <Page>
      <Head>
        <title>Matteo Pellegrino | Reading List</title>
        <meta name="description" content="Hand-picked books reccomendations."></meta>
      </Head>

      <Content>
        <Header
          heading="Reading List"
          subheading="Books I have read and believe are worth sharing"
          actions={{
            right: {
              src: "/assets/icons/home.svg",
              alt: "home icon link",
              href: "/",
            },
          }}
        />

        <div className="row flex-grow-1">
          <div className="col">
            <Card>
              <p className="">
                I commonly lean towards non-narrative and generalistic readings, aiming to draw
                links between concepts originating from diverse sources. I prefer articles, research
                papers, or practical exploration when it comes to comprehensively understanding a
                specific technology. Also, I advocate for{" "}
                <a href="https://fs.blog/reading/">
                  quitting books, different levels of reading and taking notes.
                </a>{" "}
                Among others, here&apos;s a collection of books that had a significant impact on me:
              </p>
              <ItemList items={items} />
            </Card>
          </div>
        </div>

        <Footer caption="Would you like to talk about the topics of these books or recommend one?" />
      </Content>
    </Page>
  );
}
