import React, { ForwardedRef, forwardRef } from "react";
import "./InputField.scss";
import { FieldErrors } from "react-hook-form";

// Define the props interface for the InputField component
interface Props {
  className?: string;
  placeholder: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: "text" | "email" | "number"; // Supported input types
  inputLabel: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
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
      disabled,
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
      readOnly,
      onInput,
      type = "text",
    } = props;

    // Extract the error for the current field from the errors object
    const error = errors && errors[name];

    return (
      <div className={`input-field ${className ?? ""}`}>
        <label htmlFor={id} className={required ? "required" : ""}>
          {inputLabel}
        </label>

        <div className="input-container">
          <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            id={id}
            ref={ref}
            disabled={disabled}
            defaultValue={defaultValue}
            name={name}
            onInput={onInput}
          />

          {/* Display validation error message if any */}
          {error && (
            <p className="error-message">{error.message?.toString()}</p>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
