import { useField } from "formik";
import React, { useEffect } from "react";
import { FieldError } from "./FieldError";
import { FieldContainer } from "./FieldContainer";

interface Props {
  name: string;
  label: string;
  [att: string]: any;
}

export const PpCheckbox: React.FC<Props> = (props) => {
  const [field, meta, helper] = useField({ ...props, type: "checkbox" });

  useEffect(() => {
    return () => {
      // Cleanup code when field is unmounted from the DOM
      helper.setValue(false);
      helper.setTouched(false);
      helper.setError("");
    };
  }, []);

  return (
    <FieldContainer>
      <div className={"checkbox-container"}>
        <input type="checkbox" {...field} {...props} />
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <FieldError meta={meta} />
    </FieldContainer>
  );
};
