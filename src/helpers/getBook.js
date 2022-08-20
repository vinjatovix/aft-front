import { fetchBookById } from "../http";

export const getBook = (auth, params, setBook) => async () => {
  const res = await fetchBookById(auth.token, params.bookId);
  if (res.ok) {
    setBook(await res.json());
  }
};
