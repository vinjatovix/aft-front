import { fetchBookById } from "../http";

export const getBook = (token, bookId, setBook) => async () => {
  const res = await fetchBookById(token, bookId);
  if (res.ok) {
    setBook(await res.json());
  }
};
