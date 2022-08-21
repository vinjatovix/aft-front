import { fetchWorks, fetchWorksByUser } from "../http";

export const getWorks =
  ({ token, user }, setWorks) =>
  async () => {
    const res = user.roles.includes("aft.editor")
      ? await fetchWorks(token)
      : await fetchWorksByUser(token, user.username);
    setWorks(await res.json());
  };
