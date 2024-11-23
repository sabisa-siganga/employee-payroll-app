import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./EmployeeForm.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Select from "../Select/Select";

import { employeeFormHandler } from "../../store/slices/employeeSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import { Employee, SelectOption } from "../../interfaces/types";
import { addEmployee, editEmployee } from "../../store/actions/actions";

// Predefined salutation options for the Select dropdown
const salutationSelect: SelectOption[] = [
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

const profileColors: SelectOption[] = [
  {
    value: "Green",
    label: "Green",
  },
  {
    value: "Blue",
    label: "Blue",
  },
  {
    value: "Red",
    label: "Red",
  },
  {
    value: "Default",
    label: "Default",
  },
];

const gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Unspecified",
    label: "Unspecified",
  },
];

const formatNumberWithSpaces = (value: string) => {
  return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const defaultValues = {
  firstName: "",
  lastName: "",
  grossSalary: "",
  salutation: "",
  profileColour: "Default",
  gender: "",
  employeeNumber: "",
};

const EmployeeForm = () => {
  // Access employee data from the Redux store
  const { employeeData, submittingForm } = useAppSelector(
    (state: RootState) => state.employee
  );

  // Hook to dispatch Redux actions
  const dispatch = useAppDispatch();

  // React Hook Form for managing form validation and submission
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Employee>({
    mode: "all", // Enable validation on any change
    defaultValues,
  });

  const formValues = watch();

  useEffect(() => {
    let data = defaultValues;

    if (employeeData.data) {
      data = {
        firstName: employeeData.data.firstName,
        lastName: employeeData.data.lastName,
        grossSalary: employeeData.data.grossSalary,
        salutation: employeeData.data.salutation,
        profileColour: employeeData.data.profileColour,
        gender: employeeData.data.gender,
        employeeNumber: employeeData.data.employeeNumber,
      };
    }

    setValue("firstName", data.firstName);
    setValue("lastName", data.lastName);
    setValue("grossSalary", data.grossSalary);
    setValue("salutation", data.salutation);
    setValue("profileColour", data.profileColour);
    setValue("gender", data.gender);
    setValue("employeeNumber", data.employeeNumber);
  }, [employeeData.data, setValue]);

  // Cancel button handler: Dispatches an action to cancel all changes
  const onCancel = () => {
    dispatch(employeeFormHandler(false));
  };

  // Save button handler: Placeholder for dispatching an action to save employee data
  const onSave = (data: Omit<Employee, "id">) => {
    // Edit selected employee if employeeData.data is present.
    if (employeeData.data) {
      dispatch(
        editEmployee({
          index: employeeData.index,
          employeeId: employeeData.data.id,
          employee: data,
        })
      );
    } else {
      dispatch(addEmployee(data));
    }
  };

  const genderLogic = (value: string) => {
    let gender = "";

    switch (value.toLowerCase()) {
      case "mr.":
        gender = "Male";
        break;
      case "ms.":
      case "mrs.":
        gender = "Female";
        break;
      case "mx.":
        gender = "Unspecified";
        break;
    }

    if (gender) {
      setValue("gender", gender);
    }
  };

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
          <Button
            type="submit"
            disabled={submittingForm}
            className={`save-btn ${formValues.profileColour.toLowerCase()}`}
          >
            {!submittingForm ? "Save" : "Saving ..."}
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
              // defaultValue={employeeData.data?.firstName}
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
              {...register("lastName", {
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i, // Regular expression to allow only alphabets and spaces
                  message: "Last Name should contain only alphabets",
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
                onChange(event: React.ChangeEvent<HTMLInputElement>) {
                  genderLogic(event.target.value);
                },
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
              placeholder="00000000"
              required
              className="field input-align-right"
              {...register("employeeNumber", {
                required: "Employee number is required",
                pattern: {
                  value: /^[0-9]+$/,
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
              type="text"
              disabled
              readOnly
              name="fullName"
              value={`${formValues.firstName} ${formValues.lastName}`.trim()}
              errors={errors}
            />
            <InputField
              className="field input-align-right"
              inputLabel="Gross Salary $PY"
              placeholder="20 000"
              onInput={(e) => {
                const formattedValue = formatNumberWithSpaces(
                  e.currentTarget.value
                );

                setValue("grossSalary", formattedValue, {
                  shouldValidate: true,
                });
              }}
              {...register("grossSalary", {
                pattern: {
                  value: /^[0-9\s]+$/,
                  message: "Employee number must contain only numbers",
                },
              })}
              errors={errors}
            />

            <CheckboxGroup
              label="Employee Profile Color"
              options={profileColors}
              errors={errors}
              selectedOption={
                employeeData.data
                  ? {
                      value: employeeData.data.profileColour,
                      label: employeeData.data.profileColour,
                    }
                  : {
                      value: "Default",
                      label: "Default",
                    }
              }
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
