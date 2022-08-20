import { fetchUsers } from "../http";

export const getUsers = (auth, setCanvas) => async () => {
  const res = await fetchUsers(auth.token);
  if (res.ok) {
    setCanvas(await res.json());
  }
};
