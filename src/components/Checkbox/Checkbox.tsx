import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import "./Checkbox.scss";
import { FieldErrors } from "react-hook-form";
import { FaCheck } from "react-icons/fa";

interface Props {
  className?: string;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  errors?: FieldErrors;
  type?: "radio";
  variant: "circle" | "box";
}

const CheckBox = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      label,
      onChange,
      name,
      className,
      checked,
      defaultChecked,
      errors,
      type = "radio",
      variant,
    } = props;

    const error = errors && name && errors[name];

    return (
      <div className={`check-box ${className ?? ""} ${variant}`}>
        <div className="input-container flex">
          {variant === "circle" && (
            <input
              type={type}
              ref={ref}
              id={id}
              onChange={onChange}
              name={name}
              checked={checked}
              defaultChecked={defaultChecked}
            />
          )}

          {variant === "box" && (
            <div className="check-input">
              <input
                type={type}
                ref={ref}
                id={id}
                onChange={onChange}
                name={name}
                checked={checked}
                defaultChecked={defaultChecked}
              />
              <div className="check-icon">
                <FaCheck />
              </div>
            </div>
          )}
          <label htmlFor={id}>{label}</label>
        </div>

        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default CheckBox;
