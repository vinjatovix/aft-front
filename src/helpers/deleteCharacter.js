import { fetchDeleteCharacter } from "../http";

export const deleteCharacter = (close, setUpdate) => async (token, _id) => {
  const res = await fetchDeleteCharacter(token, _id);
  if (res.ok) {
    close();
    setUpdate();
  }
};
