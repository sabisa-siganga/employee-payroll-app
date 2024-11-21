import React, { useState } from "react";
import "./EmployeeForm.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Select from "../Select/Select";
import CheckBox from "../Checkbox/Checkbox";
import {
  addEmployee,
  Employee,
  EmployeeData,
  employeeFormHandler,
} from "../../store/slices/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useForm } from "react-hook-form";

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

  const { employeeData } = useSelector((state: RootState) => state.employee);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployeeData>({
    mode: "all",
    defaultValues: employeeData,
  });

  const onCancel = () => {
    dispatch(employeeFormHandler(false));
  };
  // const onSave = () => {
  //   dispatch(addEmployee());
  // };

  return (
    <div className="employee-form">
      <div className="form-title">Employee Information</div>
      <form>
        <div className="form-btns flex center">
          <Button className="cancel-btn" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </div>
        <div className="input-fields-container">
          <div className="left-fields">
            <InputField
              inputLabel="First Name(s)"
              placeholder="Please enter first name(s)"
              type="text"
              defaultValue={employeeData.data?.firstName}
              {...register("data.firstName", {
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i, // Regular expression to allow only alphabets and spaces
                  message: "First Name should contain only alphabets",
                },
              })}
              errors={errors}
            />
            <InputField
              inputLabel="Last Name"
              placeholder="Please enter last name"
              type="text"
              required
              defaultValue={employeeData.data?.lastName}
              {...register("data.lastName", {
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i, // Regular expression to allow only alphabets and spaces
                  message: "First Name should contain only alphabets",
                },
              })}
              errors={errors}
            />
            <Select
              selectLabel="Salutation"
              className="form-select required"
              options={salutationSelect}
              {...register("data.salutation", {
                required: "Salutation is required",
              })}
              errors={errors}
            />
            <div className="radio-btns-container">
              <label className="required">Gender</label>
              <div className="radio-btns">
                {gender.map((data, index) => {
                  return (
                    <CheckBox
                      key={index}
                      id={`gender-${index}`}
                      className="radio-btn"
                      label={data.genderItem}
                      name="gender"
                      type="radio"
                      variant="circle"
                      // checked={data.checked}
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
              defaultValue={employeeData.data?.employeeNumber}
              {...register("data.employeeNumber", {
                required: "Employee number is required",
                pattern: {
                  value: /^[0-9]+$/, // Regular expression to allow only numbers
                  message: "Employee number must contain only numbers",
                },
              })}
              errors={errors}
            />
          </div>

          <div className="right-fields">
            <InputField
              className="field"
              inputLabel="Full Name"
              placeholder="Please enter full name"
              type="number"
              defaultValue={employeeData.data?.firstName}
              {...register("data.firstName", {
                required: "First Name is required",
              })}
              errors={errors}
            />
            <InputField
              className="field"
              inputLabel="Gross Salary $PY"
              placeholder="Please enter employee gross salary"
              type="number"
              defaultValue={employeeData.data?.firstName}
              {...register("data.grossSalary", {
                required: "Gross Salary is required",
              })}
              errors={errors}
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
                      type="radio"
                      variant="box"
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
