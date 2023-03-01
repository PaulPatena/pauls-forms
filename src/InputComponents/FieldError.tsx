import React from "react";
import { FieldMetaProps } from "formik";
import "./InputStyling.scss";

interface Props {
  meta: FieldMetaProps<any>;
}

export const FieldError: React.FC<Props> = ({ meta }) => {
  if (meta.touched && meta.error) {
    return <div className="error">{meta.error}</div>;
  }

  return (
    <div className="error">
      {meta.touched && meta.error ? meta.error : <span>&nbsp;</span>}
    </div>
  );
};
