import Head from "next/head";
import Image from "next/image";
import { Book, books as data } from "../data/reading_list";
import Link from "next/link";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { HeaderCard, Card } from "../components";

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
          }))
  );

  const books = await Promise.all(promises);

  return { props: { books } };
};

export default function Books({
  books,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="min-vh-100">
      <div className="bg-gradient-custom"></div>
      <Head>
        <title>Matteo Pellegrino | Reading List</title>
        <meta
          name="description"
          content="Hand-picked books reccomendations."
        ></meta>
      </Head>

      <div className="min-vh-100 container-centered d-flex flex-column p-3 pt-4">
        <HeaderCard
          heading="Reading List"
          subheading="Books I have read and believe are worth sharing"
          avatar={() => <>📚</>}
          icon={() => (
            <Link type="button" href="/">
              <Image
                src="/assets/icons/home.svg"
                width={24}
                height={24}
                alt="home icon link"
                className="pointer"
              />
            </Link>
          )}
        />

        <div className="row flex-grow-1">
          <div className="col">
            <Card className="p-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0">
                  <p className="">
                    I commonly lean towards non-narrative and generalistic
                    readings, aiming to draw links between concepts originating
                    from diverse sources. I prefer articles, research papers, or
                    practical exploration when it comes to comprehensively
                    understanding a specific technology. Also, I advocate for{" "}
                    <a href="https://fs.blog/reading/">
                      quitting books, different levels of reading and taking
                      notes.
                    </a>{" "}
                    Here is a selection of books, amongst others, which most
                    influenced me:
                  </p>
                </li>
                {books.map((book) => (
                  <li key={book.title} className="list-group-item pb-4 pt-4">
                    <div className="d-inline-flex align-items-center gap-3">
                      <div className="flex-shrink-0 text-center">
                        {book.base64img ? (
                          <Image
                            src={`data:image/png;base64, ${book.base64img}`}
                            width={80}
                            height={120}
                            alt={`${book.title} book cover`}
                          />
                        ) : (
                          <div style={{ width: 80, height: 80, fontSize: 56 }}>
                            📕
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="fs-5 fw-medium">{book.title}</div>
                        <div className="fst-italic text-muted">
                          {book.author}
                        </div>
                        {book.description && (
                          <div className="mt-3">{book.description}</div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
