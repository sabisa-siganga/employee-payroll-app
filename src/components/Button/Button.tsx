import React from "react";
import "./Button.scss";

interface Props {
  buttonName: string;
}

const Button = (props: Props) => {
  const { buttonName } = props;
  return <button className="add-button">{buttonName}</button>;
};

export default Button;
