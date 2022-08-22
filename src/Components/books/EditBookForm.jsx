import React, { useState } from "react";
import PropTypes from "prop-types";
import { BookForm } from "./BookForm";
import { useForm } from "../../hooks/useForm";
import { fetchAddBook, fetchUpdateBook } from "../../http";
import { resetMessage } from "../../helpers/resetMessage";

const FEEDBACK_INITIAL = { type: null, text: null };

export const EditBookForm = ({ auth, data, actions }) => {
  const successText = data ? "Obra actualizada" : "Obra añadida";
  const [message, setMessage] = useState(FEEDBACK_INITIAL);
  const [formState, handleChange, resetForm] = useForm(data ? { ...data } : {});

  const submit = async () => {
    const res = data
      ? await fetchUpdateBook(auth.token, data._id, formState)
      : await fetchAddBook(auth.token, formState);

    if (res.ok) {
      setMessage({
        type: "success",
        text: successText,
      });
      resetMessage(setMessage, FEEDBACK_INITIAL, resetForm);
      actions.refresh();
    } else {
      const error = await res.json();
      setMessage({ type: "error", text: error.message });
      resetMessage(setMessage, FEEDBACK_INITIAL, resetForm);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <BookForm
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
};

EditBookForm.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object,
  actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
};

EditBookForm.defaultProps = {
  data: null,
};
