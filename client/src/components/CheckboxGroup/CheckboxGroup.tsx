import React, { ForwardedRef, forwardRef } from "react";
import "./CheckboxGroup.scss";
import CheckBox from "../Checkbox/Checkbox";
import { FieldErrors } from "react-hook-form";
import { SelectOption } from "../../interfaces/types";

// Define the props interface for the CheckboxGroup component
interface Props {
  required?: boolean;
  label: string;
  name: string;
  errors?: FieldErrors;
  options: SelectOption[];
  selectedOption?: SelectOption;
}

const CheckboxGroup = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { required, label, errors, options, name, selectedOption, ...rest } =
      props;

    const error = errors && errors[name];

    return (
      <div className="radio-btns-container">
        <label className={required ? "required" : ""}>{label}</label>
        <div className="flex flex-col flex-1">
          <div className="radio-btns">
            {options.map((option, index) => {
              return (
                <CheckBox
                  {...rest} // Spread operator to include other props
                  key={`checkbox-group-key-${index}`}
                  id={`checkbox-group-${index}-${name}`}
                  className="radio-btn"
                  label={option.label}
                  type="radio"
                  variant="circle"
                  name={name}
                  value={option.value}
                  defaultChecked={
                    selectedOption
                      ? selectedOption.value === option.value // Check if the option is pre-selected
                      : option.value === "default" // Default to "default" option if no selection
                  }
                  ref={ref}
                />
              );
            })}
          </div>
          {/* Display validation error message if any */}
          {error && (
            <p className="error-message">{error.message?.toString()}</p>
          )}
        </div>
      </div>
    );
  }
);

export default CheckboxGroup;
