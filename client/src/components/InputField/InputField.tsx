import React, { ForwardedRef, forwardRef } from "react";
import "./InputField.scss";
import { FieldErrors } from "react-hook-form";

// Define the props interface for the InputField component
interface Props {
  className?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: "text" | "radio" | "email" | "checkbox" | "number"; // Supported input types
  inputLabel: string;
  id?: string;
  required?: boolean;
  defaultValue?: string;
  errors?: FieldErrors; // Errors object from react-hook-form for validation messages
  name: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

// Create the InputField component with forwardRef to pass refs to the DOM element
const InputField = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    // Destructure props
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
      onInput,
    } = props;

    // Extract the error for the current field from the errors object
    const error = errors && errors[name];

    return (
      <div className={`input-field ${className ?? ""}`}>
        {/* Container for label and input field */}
        <div className="input-container">
          <label htmlFor={id} className={required ? "required" : ""}>
            {inputLabel}
          </label>
          <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            id={id}
            ref={ref}
            defaultValue={defaultValue}
            name={name}
            onInput={onInput}
          />
        </div>

        {/* Display validation error message if any */}
        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default InputField;
