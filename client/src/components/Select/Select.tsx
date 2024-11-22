import React, { ForwardedRef, forwardRef } from "react";
import "./Select.scss";
import { FieldErrors } from "react-hook-form";
import { SelectOption } from "../../interfaces/types";

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
        <label htmlFor={id}>{selectLabel}</label>
        <div className="select-container">
          <select
            className={className}
            ref={ref}
            name={name}
            id={id}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option.value.toString()}>
                  {option.label}
                </option>
              );
            })}
          </select>
          {/* Display validation error message if any */}
          {error && (
            <p className="error-message">{error.message?.toString()}</p>
          )}
        </div>
      </div>
    );
  }
);

export default Select;
