import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { fetchLogin } from "../../http";

import { LoginForm } from "../../Components/login/LoginForm";
import { UserPanel } from "../../Components/login/UserPanel";

import { useForm } from "../../hooks/useForm";

import { isAuthenticated } from "../../helpers/isAuthenticated";
import { resetMessage } from "../../helpers/resetMessage";

const INIT_MESSAGE = { type: null, text: null };

export const LoginScreen = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [responseMessage, setResponseMessage] = useState(INIT_MESSAGE);

  const [formState, handleChange, resetForm] = useForm({
    username: "",
    password: "",
  });

  const submit = async () => {
    const res = await fetchLogin(formState);

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setAuth(data.user);
      resetForm();
    } else {
      const error = await res.json();
      setResponseMessage({ type: "error", text: error.id });
      resetMessage(setResponseMessage, INIT_MESSAGE, resetForm);
      resetForm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  return (
    <>
      {isAuthenticated(auth) ? (
        <UserPanel auth={auth} handleLogOut={handleLogOut} />
      ) : (
        <LoginForm
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          message={responseMessage}
        />
      )}
    </>
  );
};
