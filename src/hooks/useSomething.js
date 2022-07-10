import { useEffect, useState } from "react";

export const useSomething = (aim, call) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    call(aim).then((data) => {
      setState({
        data: data,
        loading: false,
      });
    });
  }, [aim]);

  return state;
};
