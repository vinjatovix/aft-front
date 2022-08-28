import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import TextInputField from "../../Components/common/TextInputField";
import Button from "../../Components/ui/buttons/Button";
import { login } from "../../helpers/login";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, loginValues } = useSelector((state) => state.auth);
  const initialValues = {
    username: loginValues?.username || "",
    password: loginValues?.password || "",
  };

  const handleLogin = (values) => {
    dispatch(login(values.username, values.password));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form className="login-form">
          <TextInputField
            name="username"
            label="username"
            placeholder="Enter username"
            error={error?.username?.msg}
          />

          <TextInputField
            name="password"
            label="password"
            type="password"
            placeholder="Enter password"
            error={error?.password?.msg}
          />
          <Button type="submit" loading={loading}>
            Login
          </Button>
          {error && <p className={error.type}>{error.text}</p>}
        </Form>
      </Formik>
    </>
  );
};
