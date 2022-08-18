export const getApiHost = () =>
  import.meta.env.VITE_STAGE
    ? import.meta.env.VITE_API_PRE
    : import.meta.env.VITE_API_PRO;
