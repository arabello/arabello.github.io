import { Book } from "../data/reading_list";
import { promises as fs } from "fs";
import { Client, isFullPage } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { P, match } from "ts-pattern";

export type BookWithCover = Book & { base64img?: string };

export async function fetchBookWithCover(book: Book): Promise<BookWithCover> {
  return fetch(`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`)
    .then((resp) =>
      resp.ok ? resp.arrayBuffer() : fs.readFile(`public/assets/book-covers/${book.isbn}.jpg`),
    )
    .then((buff) => ({
      ...book,
      base64img: Buffer.from(buff).toString("base64"),
    }));
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function defined<T>(x: T | undefined): x is NonNullable<T> {
  return x !== undefined;
}

export async function fetchBooks(): Promise<Book[]> {
  const database_id = process.env.NOTION_DATABASE_ID;
  if (!database_id) {
    return Promise.reject("Database ID not found");
  }

  return notion.databases
    .query({
      database_id,
      sorts: [
        {
          property: "Publish Rank",
          direction: "ascending",
        },
      ],
    })
    .then((res) => res.results.filter(isFullPage).map(createBookFromPage).filter(defined));
}

function createBookFromPage(page: PageObjectResponse): Book | undefined {
  return match(page.properties)
    .with(
      {
        Title: { type: "title", title: P.when((x) => x.length > 0) },
        Author: { type: "rich_text", rich_text: P.when((x) => x.length > 0) },
        ISBN: { type: "rich_text", rich_text: P.when((x) => x.length > 0) },
        Impact: { type: "rich_text" },
        Status: { type: "status", status: { name: P.not("Not started") } },
        "Publish Rank": { type: "number", number: P.number },
      },
      ({ Title, Author, ISBN, Impact }) => ({
        title: Title.title[0].plain_text,
        author: Author.rich_text[0].plain_text,
        description: Impact.rich_text.length > 0 ? Impact.rich_text[0].plain_text : undefined,
        isbn: ISBN.rich_text[0].plain_text,
      }),
    )
    .otherwise(() => undefined);
}
