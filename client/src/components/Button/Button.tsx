import React from "react";
import "./Button.scss";

// Define the props interface for the Button component
interface Props {
  type?: "submit" | "button";
  className: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Define the Button component
const Button = (props: Props) => {
  // Destructure props
  const { children, className, type = "button", onClick, disabled } = props;

  return (
    // Button element with dynamic type, class, and click handler
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
