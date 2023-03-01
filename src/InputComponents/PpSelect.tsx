import { useField } from "formik";
import React, { useEffect } from "react";
import { FieldContainer } from "./FieldContainer";
import { FieldError } from "./FieldError";

interface PpSelectOption {
  value: string | ReadonlyArray<string> | number | undefined;
  label: string;
}

interface Props {
  name: string;
  label: string;
  options: PpSelectOption[];

  // By default, when rendering the options label, we will use the label attribute of the option
  //  However, user can specify a specific labelKey
  // optionLabelKey?: string;
}

export const PpSelect: React.FC<Props> = (props) => {
  const [field, meta, helper] = useField({ ...props, type: "select" });

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
      <select {...field} {...props}>
        {props.options.map((o: PpSelectOption) => (
          <option value={o.value} key={`${props.name}--${o.value}`}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError meta={meta} />
    </FieldContainer>
  );
};
