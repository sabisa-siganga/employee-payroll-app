import React from "react";
import "./Select.scss";

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  selectLabel: string;
  className: string;
  options: SelectOption[];
}

const Select = (props: Props) => {
  const { selectLabel, className, options } = props;
  return (
    <div className="select-cont">
      <label htmlFor="">{selectLabel}</label>
      <select className={className}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
