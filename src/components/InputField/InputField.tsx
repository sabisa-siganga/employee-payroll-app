import React, { ForwardedRef, forwardRef } from "react";
import "./InputField.scss";
import { FieldErrors } from "react-hook-form";

interface Props {
  className?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: "text" | "radio" | "email" | "checkbox" | "number";
  inputLabel: string;
  id?: string;
  required?: boolean;
  defaultValue?: string;
  errors?: FieldErrors;
  name: string;
}

const InputField = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      className,
      placeholder,
      required,
      onChange,
      value,
      inputLabel,
      id,
      defaultValue,
      errors,
      name,
    } = props;

    const error = errors && errors[name];

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
          ref={ref}
          defaultValue={defaultValue}
        />

        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default InputField;
