import React, { ChangeEvent, ForwardedRef, forwardRef } from "react";
import "./RadioBtn.scss";
import { FieldErrors } from "react-hook-form";

interface Props {
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  errors?: FieldErrors;
}

const RadioBtn = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, label, onChange, name, checked, defaultChecked, errors } =
      props;

    const error = errors && name && errors[name];

    return (
      <div className={`check-box `}>
        <input
          type="radio"
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

export default RadioBtn;
