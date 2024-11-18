import React, { useState } from "react";
import "./EmployeeForm.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Select from "../Select/Select";
import CheckBox from "../Checkbox/Checkbox";
import RadioBtn from "../RadioBtn/RadioBtn";

const salutationSelect = [
  {
    label: "Select salutation",
    value: "Select salutation",
  },
  {
    label: "Dr.",
    value: "Dr.",
  },
  {
    label: "Mr.",
    value: "Mr.",
  },
  {
    label: "Ms.",
    value: "Ms.",
  },
  {
    label: "Mrs.",
    value: "Mrs.",
  },
  {
    label: "Mx.",
    value: "Mx.",
  },
];

const EmployeeForm = () => {
  const [gender, setGender] = useState([
    {
      checked: false,
      genderItem: "Male",
    },
    {
      checked: false,
      genderItem: "Female",
    },
    {
      checked: false,
      genderItem: "Unspecified",
    },
  ]);
  const [profileColors, setProfileColors] = useState([
    {
      checked: false,
      profileColor: "Green",
    },
    {
      checked: false,
      profileColor: "Blue",
    },
    {
      checked: false,
      profileColor: "Red",
    },
    {
      checked: false,
      profileColor: "Default",
    },
  ]);
  return (
    <div className="employee-form">
      <div className="form-title">Employee Information</div>

      <form>
        <div className="form-btns flex center">
          <Button className="cancel-btn" buttonName="Cancel" />
          <Button type="submit" className="save-btn" buttonName="Save" />
        </div>
        <div className="input-fields-container">
          <div className="left-fields">
            <InputField
              inputLabel="First Name(s)"
              placeholder="Please enter name"
              type="text"
              required
            />
            <InputField
              inputLabel="Last Name"
              placeholder="Please enter name"
              type="text"
              required
            />
            <Select
              selectLabel="Salutation"
              className="form-select required"
              options={salutationSelect}
            />
            <div className="radio-btns-container">
              <label className="required">Gender</label>
              <div className="radio-btns">
                {gender.map((data, index) => {
                  return (
                    <RadioBtn
                      key={index}
                      label={data.genderItem}
                      name="gender"
                      checked={data.checked}
                    />
                  );
                })}
              </div>
            </div>

            <InputField
              inputLabel="Employee #"
              placeholder="Please enter employee number"
              type="number"
              required
            />
          </div>

          <div className="right-fields">
            <InputField
              className="field"
              inputLabel="Full Name"
              placeholder="Please enter employee number"
              type="number"
            />
            <InputField
              className="field"
              inputLabel="Gross Salary $PY"
              placeholder="Please enter employee number"
              type="number"
            />
            <div className="radio-btns-container">
              <label>Employee Profile Colour</label>
              <div className="radio-btns">
                {profileColors.map((item, index) => {
                  return (
                    <CheckBox
                      key={index}
                      id={`color-${index}`}
                      className="form-checkbox"
                      label={item.profileColor}
                      name="profile-color"
                      // checked={item.checked}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
