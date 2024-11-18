import React from "react";
import "./Button.scss";

interface Props {
  buttonName: string;
  type?: "submit" | "button";
  className: string;
}

const Button = (props: Props) => {
  const { buttonName, className, type = "button" } = props;

  return (
    <button type={type} className={`btn ${className ?? ""}`}>
      {buttonName}
    </button>
  );
};

export default Button;
