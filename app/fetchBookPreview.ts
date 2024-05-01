import { Book } from "../data/reading_list";
import { promises as fs } from "fs";

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
