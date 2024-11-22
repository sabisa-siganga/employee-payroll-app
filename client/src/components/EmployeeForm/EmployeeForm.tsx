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
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import { SelectOption } from "../../interfaces/types";

// Predefined salutation options for the Select dropdown
const salutationSelect = [
  {
    label: "Select salutation",
    value: "",
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

const formatNumberWithSpaces = (value: string) => {
  return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const EmployeeForm = () => {
  // State for managing gender radio button selections
  const [gender, setGender] = useState<SelectOption[]>([
    {
      value: false,
      label: "Male",
    },
    {
      value: false,
      label: "Female",
    },
    {
      value: false,
      label: "Unspecified",
    },
  ]);

  // State for managing profile color radio button selections
  const [profileColors, setProfileColors] = useState<SelectOption[]>([
    {
      value: false,
      label: "Green",
    },
    {
      value: false,
      label: "Blue",
    },
    {
      value: false,
      label: "Red",
    },
    {
      value: true,
      label: "Default",
    },
  ]);

  // Access employee data from the Redux store
  const { employeeData } = useSelector((state: RootState) => state.employee);

  // Hook to dispatch Redux actions
  const dispatch = useDispatch();

  // React Hook Form for managing form validation and submission
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Employee>({
    mode: "all", // Enable validation on any change
    defaultValues: {
      firstName: "",
      fullName: "",
      lastName: "",
      grossSalary: "",
      salutation: "",
      profileColour: "",
      gender: "",
      employeeNumber: "",
    },
  });

  // Cancel button handler: Dispatches an action to cancel all changes
  const onCancel = () => {
    dispatch(employeeFormHandler(false));
  };

  // Save button handler: Placeholder for dispatching an action to save employee data
  const onSave = (employee: Employee) => {
    // dispatch(());
  };

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="employee-form">
      <div className="form-title">Employee Information</div>
      {/* Form submission handler */}
      <form onSubmit={handleSubmit(onSave)}>
        {/* Form buttons */}
        <div className="form-btns flex center">
          <Button className="cancel-btn" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </div>
        {/* Form input fields */}
        <div className="input-fields-container">
          <div className="left-fields">
            <InputField
              inputLabel="First Name(s)"
              placeholder="Please enter first name(s)"
              type="text"
              required
              defaultValue={employeeData.data?.firstName}
              {...register("firstName", {
                required: "First Name(s) is required",
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
              {...register("lastName", {
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i, // Regular expression to allow only alphabets and spaces
                  message: "First Name should contain only alphabets",
                },
              })}
              errors={errors}
            />

            {/* Salutation dropdown */}
            <Select
              selectLabel="Salutation"
              className="form-select required"
              options={salutationSelect}
              {...register("salutation", {
                required: "Salutation is required",
              })}
              errors={errors}
            />

            {/* Gender radio buttons */}
            <CheckboxGroup
              label="Gender"
              required
              options={gender}
              errors={errors}
              {...register("gender", {
                required: "Gender is required",
              })}
            />

            <InputField
              inputLabel="Employee #"
              placeholder="Please enter employee number"
              type="number"
              required
              defaultValue={employeeData.data?.employeeNumber}
              {...register("employeeNumber", {
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
              defaultValue={employeeData.data?.fullName}
              {...register("fullName", {
                required: "Full Name is required",
              })}
              errors={errors}
            />
            <InputField
              className="field"
              inputLabel="Gross Salary $PY"
              placeholder="Please enter employee gross salary"
              type="number"
              onInput={(e) => {
                const formattedValue = formatNumberWithSpaces(
                  e.currentTarget.value
                );

                setValue("grossSalary", formattedValue, {
                  shouldValidate: true,
                });
              }}
              defaultValue={employeeData.data?.grossSalary}
              {...register("grossSalary", {
                required: "Gross Salary is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Employee number must contain only numbers",
                },
              })}
              errors={errors}
            />

            <CheckboxGroup
              label="Employee Profile Color"
              required
              options={profileColors}
              errors={errors}
              {...register("profileColour", {
                required: "Profile color is required",
              })}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
