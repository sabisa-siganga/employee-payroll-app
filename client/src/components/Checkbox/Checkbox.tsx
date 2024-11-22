import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import "./Checkbox.scss";
import { FaCheck } from "react-icons/fa";

// Define the props interface for the CheckBox component
interface Props {
  className?: string;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string | number | boolean;
  type?: "radio"; // Default type is "radio"
  variant: "circle" | "box";
}

// Create the CheckBox component with forwardRef to pass refs to the DOM element
const CheckBox = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    // Destructure props
    const {
      id,
      label,
      onChange,
      name,
      className,
      value,
      checked,
      defaultChecked,
      type = "radio",
      variant,
      ...rest
    } = props;

    return (
      <div className={`check-box ${className ?? ""} ${variant}`}>
        {/* Container for input and label */}
        <div className="input-container flex">
          {/* Circle variant checkbox */}
          {variant === "circle" && (
            <input
              {...rest}
              type={type}
              ref={ref}
              id={id}
              onChange={onChange}
              value={value?.toString()}
              name={name}
              checked={checked}
              defaultChecked={defaultChecked}
            />
          )}
          {/* Box variant checkbox */}
          {variant === "box" && (
            <div className="check-input">
              <input
                {...rest}
                type={type}
                ref={ref}
                value={value?.toString()}
                id={id}
                onChange={onChange}
                name={name}
                checked={checked}
                defaultChecked={defaultChecked}
              />

              {/* Icon for the box variant */}
              <div className="check-icon">
                <FaCheck />
              </div>
            </div>
          )}
          {/* Checkbox label */}
          <label htmlFor={id}>{label}</label>
        </div>
      </div>
    );
  }
);

export default CheckBox;
