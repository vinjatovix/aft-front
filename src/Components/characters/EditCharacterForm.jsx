import React, { useState } from "react";
import PropTypes from "prop-types";
import { authType, modalActionsType } from "../../PropTypes";
import { fetchAddCharacter, fetchUpdateCharacter } from "../../http";

import { CharacterForm } from "./CharacterForm";

import { useForm } from "../../hooks/useForm";

import { resetMessage } from "../../helpers/resetMessage";

export const EditCharacterForm = ({ actions, auth, data }) => {
  const successText = data ? "Personaje actualizado" : "Personaje añadido";
  const initMessage = { type: null, text: null };
  const [message, setMessage] = useState(initMessage);
  const [formState, handleChange, resetForm] = useForm(data ? { ...data } : {});

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
      resetMessage(setMessage, initMessage);
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
  actions: modalActionsType,
  auth: authType,
  data: PropTypes.object,
};

EditCharacterForm.defaultProps = {
  data: null,
};
