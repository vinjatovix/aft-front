import React from "react";
import { Field } from "formik";

const TextInputField = ({ name, placeholder, type, autoComplete, error }) => {
  return (
    <Field name={name}>
      {({ field, meta, form }) => (
        <>
          <input
            data-testid={name}
            placeholder={placeholder}
            type={type || "text"}
            autoComplete={autoComplete ? "on" : "off"}
            {...field}
          />
          {!error && meta.touched && meta.error && (
            <p className="error">{meta.error}</p>
          )}
          {!form.dirty && error && <p className="error">{error}</p>}
        </>
      )}
    </Field>
  );
};

export default TextInputField;
