import { fetchDeleteBook } from "../http";

export const deleteBook =
  ({ close }) =>
  async (token, _id) => {
    const res = await fetchDeleteBook(token, _id);
    if (res.ok) {
      close();
    }
  };
