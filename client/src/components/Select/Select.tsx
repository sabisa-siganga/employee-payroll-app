import React, { ForwardedRef, forwardRef } from "react";
import "./Select.scss";
import { FieldErrors } from "react-hook-form";

// Define the structure of each option for the Select component
export interface SelectOption {
  label: string;
  value: string;
}

// Define the props interface for the Select component
interface Props {
  id?: string;
  selectLabel: string;
  className: string;
  options: SelectOption[];
  errors: FieldErrors;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Create the Select component with forwardRef to pass refs to the DOM element
const Select = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    // Destructure props for easier usage
    const { selectLabel, className, options, errors, name, id, onChange } =
      props;

    // Extract the error for the current field from the errors object
    const error = errors && errors[name];

    return (
      <div className="select-cont">
        {/* Container for label and select field */}
        <div className="select-container">
          <label htmlFor={id}>{selectLabel}</label>
          <select
            className={className}
            ref={ref}
            name={name}
            id={id}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        {/* Display validation error message if any */}
        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default Select;
