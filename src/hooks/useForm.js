import { useState } from "react";

export const useForm = (initialState = {}, resetState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const reset = () => {
    setFormState(resetState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return [formState, handleChange, reset];
};
