import { fetchCharactersByBookId } from "../http";

export const getCharacters = (auth, params, setCanvas) => async () => {
  const res = await fetchCharactersByBookId(auth.token, params.bookId);
  if (res.ok) {
    setCanvas(await res.json());
  }
};
