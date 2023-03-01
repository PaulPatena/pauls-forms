import React, { useEffect } from "react";
import { useField } from "formik";
import { FieldError } from "./FieldError";
import { FieldContainer } from "./FieldContainer";

interface Props {
  name: string;
  label: string;
  type: "text" | "number" | "email";
  [att: string]: any;
}

export const PpTextInput: React.FC<Props> = (props) => {
  const [field, meta, helper] = useField({ ...props });

  useEffect(() => {
    return () => {
      // Cleanup code when field is unmounted from the DOM
      helper.setValue("");
      helper.setTouched(false);
      helper.setError("");
    };
  }, []);

  return (
    <FieldContainer>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...field} {...props} />
      <FieldError meta={meta} />
    </FieldContainer>
  );
};
