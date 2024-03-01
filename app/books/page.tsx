import type { GetStaticProps, InferGetStaticPropsType, Metadata } from "next";
import { Card, Header } from "../../components";
import { Footer } from "../../components/Footer";
import { ItemList } from "../../components/ItemList";
import { Content } from "../../components/layout";
import { Book, books as data } from "../../data/reading_list";
import { fetchBookWithCover } from "../fetchBookPreview";

export const metadata: Metadata = {
  title: "Matteo Pellegrino | Reading List",
  description: "Hand-picked books reccomendations.",
};

export default async function Books() {
  const books = await Promise.all(data.map(fetchBookWithCover));
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
