import React, { useState } from "react";
import PropTypes from "prop-types";
import { CharacterForm } from "./CharacterForm";
import { useForm } from "../../hooks/useForm";
import { fetchAddCharacter, fetchUpdateCharacter } from "../../http";
import { resetMessage } from "../../helpers/resetMessage";

const EditCharacterForm = ({ auth, data, actions }) => {
  const successText = data ? "Personaje actualizado" : "Personaje añadido";
  const initMessage = { type: null, text: null };
  const [message, setMessage] = useState(initMessage);
  const [formState, handleChange, resetForm] = useForm(data ? { ...data } : {});

  console.log(formState);
  const submit = async () => {
    const res = data.name
      ? await fetchUpdateCharacter(auth.token, data._id, formState)
      : await fetchAddCharacter(auth.token, formState);

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
    <CharacterForm
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
};

EditCharacterForm.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object,
};

EditCharacterForm.defaultProps = {
  data: null,
};

export default EditCharacterForm;
