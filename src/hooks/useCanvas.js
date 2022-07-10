import { useReducer } from "react";
import { canvasReducer } from "../reducers/canvasReducer";

export const useCanvas = () => {
  const [canvas, dispatchCanvas] = useReducer(canvasReducer, {}, () => ({
    data: [],
    updatedAt: +new Date(),
  }));

  const canvasActions = {
    count: canvas.data.length,
    setCanvas: (data) => dispatchCanvas({ type: "SET_CANVAS", payload: data }),
    setUpdate: () => dispatchCanvas({ type: "SET_UPDATE" }),
    filterBy: (key, value) =>
      canvas.data.filter((item) => item[key].includes(value)),
  };

  return [canvas, canvasActions];
};
