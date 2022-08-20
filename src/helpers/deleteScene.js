import { fetchDeleteScene } from "../http";

export const deleteScene = (close, setUpdate) => async (token, _id) => {
  const res = await fetchDeleteScene(token, _id);
  if (res.ok) {
    close();
    setUpdate();
  }
};
