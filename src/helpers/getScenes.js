import { fetchScenesByBookId } from "../http";

export const getScenes = (auth, params, setCanvas) => async () => {
  const res = await fetchScenesByBookId(auth.token, params.bookId);
  if (res.ok) {
    setCanvas(await res.json());
  }
};
