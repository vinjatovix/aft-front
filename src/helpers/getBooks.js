import { fetchBooks } from "../http";

export const getBooks = (auth, dispatchEntity) => async () => {
  const res = await fetchBooks(auth.token);
  if (res.ok) {
    const data = await res.json();
    dispatchEntity.setCanvas(data);
  }
};
