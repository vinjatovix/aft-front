import React, { useState } from "react";
import PropTypes from "prop-types";
import { SceneForm } from "./SceneForm";
import { useForm } from "../../hooks/useForm";
import { fetchAddScene, fetchUpdateScene } from "../../http";
import { resetMessage } from "../../helpers/resetMessage";

const EditSceneForm = ({ auth, data, actions }) => {
  const successText = data ? "Personaje actualizado" : "Personaje añadido";
  const initMessage = { type: null, text: null };
  const [message, setMessage] = useState(initMessage);
  const [formState, handleChange, resetForm] = useForm(data ? { ...data } : {});

  const submit = async () => {
    const res = data.name
      ? await fetchUpdateScene(auth.token, data._id, formState)
      : await fetchAddScene(auth.token, formState);

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
    <SceneForm
      formState={formState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
};

EditSceneForm.propTypes = {
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

EditSceneForm.defaultProps = {
  data: null,
};

export default EditSceneForm;
