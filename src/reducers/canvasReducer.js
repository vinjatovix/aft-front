export const canvasReducer = (state, action) => {
  switch (action.type) {
    case "SET_CANVAS":
      return { ...state, data: action.payload };
    case "SET_UPDATE":
      return { ...state, updatedAt: new Date() };
    default:
      return state;
  }
};
