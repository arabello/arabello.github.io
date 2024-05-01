import type { Metadata } from "next";
import { Card, Header } from "../../components";
import { Footer } from "../../components/Footer";
import { ItemList } from "../../components/ItemList";
import { Content } from "../../components/layout";
import { fetchBookWithCover, fetchBooks } from "../books";

const title = "Matteo Pellegrino's Reading List";
const description = "Hand-picked books reccomendations";

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
        url: `/assets/og/books-emoji.png`,
        width: 80,
        height: 80,
      },
    ],
  },
};

export default async function Books() {
  const books = await fetchBooks();
  const booksWithCover = await Promise.all(books.map(fetchBookWithCover));
  const items = booksWithCover.map((b) => ({
    title: b.title,
    subtitle: b.author,
    caption: b.description,
    image: {
      src: b.base64img ? `data:image/png;base64, ${b.base64img}` : "/assets/icons/book.svg",
      width: 80,
      height: 110,
      alt: `${b.title} book cover`,
    },
  }));

  return (
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
              I commonly lean towards non-narrative and generalistic readings, aiming to draw links
              between concepts originating from diverse sources. I prefer articles, research papers,
              or practical exploration when it comes to comprehensively understanding a specific
              technology. Also, I advocate for{" "}
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
  );
}
