import React, { ForwardedRef, forwardRef } from "react";
import "./Select.scss";
import { FieldErrors } from "react-hook-form";

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  selectLabel: string;
  className: string;
  options: SelectOption[];
  errors: FieldErrors;
  name: string;
}

const Select = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    const { selectLabel, className, options, errors, name } = props;
    const error = errors && errors[name];

    return (
      <div className="select-cont">
        <label htmlFor="">{selectLabel}</label>
        <select className={className} ref={ref}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default Select;
