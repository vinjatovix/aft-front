import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "../../hooks/useForm";

import { LoginForm } from "./LoginForm";
import { fetchLogin } from "../../http";
import UserPanel from "./UserPanel";
import { resetMessage } from "../../helpers/resetMessage";

export const LoginScreen = () => {
  const { auth, setAuth } = useContext(UserContext);

  const initMessage = { type: null, text: null };
  const [responseMessage, setResponseMessage] = useState(initMessage);
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
      resetMessage(setResponseMessage, initMessage, resetForm);
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

  console.log(auth);
  return (
    <>
      {auth && auth.user && (
        <UserPanel user={auth} handleLogOut={handleLogOut} />
      )}
      
      {(!auth || !auth.user) && (
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
