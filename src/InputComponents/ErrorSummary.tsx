import React from "react";
import { FormikErrors } from "formik";
import "./InputStyling.scss";

interface Props {
  errors: FormikErrors<any>;
}

export const ErrorSummary: React.FC<Props> = (props) => {
  if (Object.keys(props.errors).length > 0) {
    return (
      <div className={"error-summary-container"}>
        {Object.entries(props.errors).map((e) => {
          const [name, errorMessage] = e;
          return <div key={`err-${name}`}>{`${name} - ${errorMessage}`}</div>;
        })}
      </div>
    );
  }

  return null;
};
