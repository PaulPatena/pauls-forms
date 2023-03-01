import React, { useEffect } from "react";
import "./InputStyling.scss";

export const FieldContainer: React.FC<any> = (props) => {
  return <div className={`field-container`}>{props.children}</div>;
};
