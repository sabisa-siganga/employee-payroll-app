import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import "./Checkbox.scss";
import { FieldErrors } from "react-hook-form";

interface Props {
  className?: string;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  errors?: FieldErrors;
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
    } = props;

    const error = errors && name && errors[name];

    return (
      <div className={`check-box ${className ?? ""}`}>
        <input
          type="checkbox"
          ref={ref}
          id={id}
          onChange={onChange}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        <label htmlFor={id}>{label}</label>

        {error && <p className="error-message">{error.message?.toString()}</p>}
      </div>
    );
  }
);

export default CheckBox;
