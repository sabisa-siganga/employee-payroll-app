import React from "react";
import "./Button.scss";

interface Props {
  type?: "submit" | "button";
  className: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: Props) => {
  const { children, className, type = "button", onClick } = props;

  return (
    <button onClick={onClick} type={type} className={`btn ${className ?? ""}`}>
      {children}
    </button>
  );
};

export default Button;
