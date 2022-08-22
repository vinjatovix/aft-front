export const modalReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_MODAL":
      return { ...state, add: true, blur: true };
    case "DETAIL_MODAL":
      return { ...state, detail: true, blur: true };
    case "EDIT_MODAL":
      return { ...state, edit: true, blur: true };
    case "DELETE_MODAL":
      return { ...state, delete: true, blur: true };
    case "CLOSE_MODAL":
      return {
        ...state,
        add: false,
        detail: false,
        edit: false,
        delete: false,
        blur: false,
      };
    case "REFRESH":
      return {
        ...state,
        lastRefresh: new Date(),
      };
    default:
      return state;
  }
};
