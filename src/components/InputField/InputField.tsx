import React from "react";
import "./InputField.scss";

interface Props {
  className?: string;
  placeholder: string;
  onChange?: () => void;
  value?: string;
  type?: "text" | "radio" | "email" | "checkbox" | "number";
  inputLabel: string;
  id?: string;
  required?: boolean;
}

const InputField = (props: Props) => {
  const { className, placeholder, required, onChange, value, inputLabel, id } =
    props;
  return (
    <div className={`input-field ${className ?? ""}`}>
      <label htmlFor={id} className={required ? "required" : ""}>
        {inputLabel}
      </label>
      <input
        type="text"
        onChange={onChange}
        required={required}
        value={value}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default InputField;
