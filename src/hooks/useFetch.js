import { useEffect, useRef, useState } from "react";
import { fetchData } from "../http";

const INITIAL_STATE = {
  loading: true,
  error: null,
  data: null,
};

export const useFetch = (
  path,
  method,
  { body, token, version = "v1", run = null }
) => {
  const isMounted = useRef(true);
  const [state, setState] = useState(INITIAL_STATE);

  const reFetch = () => {
    setState(INITIAL_STATE);
    fetchData({ version, path, method, token, body, setState });
  };

  useEffect(() => {
    if (token || run) {
      fetchData({ version, path, method, token, body, setState });
    } else {
      setState({
        data: null,
        loading: false,
        error: "No token",
      });
    }
  }, [method, body, token, version, path, run]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return [state, reFetch];
};
