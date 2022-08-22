import { useReducer } from "react";
import { modalReducer } from "../reducers/modalReducer";

const resetAllModals = () => ({
  add: false,
  blur: false,
  delete: false,
  detail: false,
  edit: false,
  data: {},
  lastRefresh: new Date(),
});

export const useModals = () => {
  const [modals, dispatchModals] = useReducer(modalReducer, {}, resetAllModals);

  const actions = {
    add: () => dispatchModals({ type: "ADD_MODAL" }),
    close: () => dispatchModals({ type: "CLOSE_MODAL" }),
    delete: () => dispatchModals({ type: "DELETE_MODAL" }),
    detail: () => dispatchModals({ type: "DETAIL_MODAL" }),
    edit: () => dispatchModals({ type: "EDIT_MODAL" }),
    refresh: () => dispatchModals({ type: "REFRESH" }),
    setDataDetail: (data) =>
      dispatchModals({ type: "SET_DATA", payload: data }),
  };

  return [modals, actions];
};
