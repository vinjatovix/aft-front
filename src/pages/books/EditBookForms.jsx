import React, { useState } from "react";
import PropTypes from "prop-types";
import { BookForm } from "./BookForm";
import { useForm } from "../../hooks/useForm";
import { fetchAddBook, fetchUpdateBook } from "../../http";
import { resetMessage } from "../../helpers/resetMessage";

const EditBookForm = ({ auth, data, actions }) => {
  const successText = data ? "Obra actualizada" : "Obra añadida";
  const initMessage = { type: null, text: null };
  const [message, setMessage] = useState(initMessage);
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
      resetMessage(setMessage, initMessage, resetForm);
      actions.refresh();
    } else {
      const error = await res.json();
      setMessage({ type: "error", text: error.errors });
      resetMessage(setMessage, initMessage, resetForm);
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
};

EditBookForm.defaultProps = {
  data: null,
};

export default EditBookForm;
