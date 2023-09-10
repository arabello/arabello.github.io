import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeaderCard } from "./components/HeaderCard";
import { books } from "./reading_list";
import Card from "./components/Card";

const Books: NextPage = () => {
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
            <a type="button" href="/">
              <Image
                src="/assets/icons/home.svg"
                width={24}
                height={24}
                alt="github icon link"
              />
            </a>
          )}
        />

        <div className="row flex-grow-1">
          <div className="col mt-5">
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
                    <div className="fs-5 fw-medium">{book.title}</div>
                    <div className="fst-italic text-muted">{book.author}</div>
                    {book.description && (
                      <div className="mt-3">{book.description}</div>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
