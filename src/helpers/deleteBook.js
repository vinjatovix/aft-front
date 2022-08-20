import { fetchDeleteBook } from "../http";

export const deleteBook =
  (modalActions, dispatchEntity) => async (token, _id) => {
    const res = await fetchDeleteBook(token, _id);
    if (res.ok) {
      modalActions.close();
      dispatchEntity.setUpdate();
    }
  };
