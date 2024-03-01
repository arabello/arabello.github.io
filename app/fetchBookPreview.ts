import { BookPreview } from "../components";
import { Book } from "../data/reading_list";

export type BookWithCover = Book & { base64img?: string };

export async function fetchBookWithCover(book: Book): Promise<BookWithCover> {
  return !book.isbn
    ? Promise.resolve(book)
    : fetch(`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`)
        .then((r) => r.arrayBuffer())
        .then((buff) => ({
          ...book,
          base64img: Buffer.from(buff).toString("base64"),
        }));
}
