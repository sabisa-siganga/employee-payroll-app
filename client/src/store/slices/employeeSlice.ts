import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addEmployee, editEmployee, fetchEmployees } from "../actions/actions";
import { Employee, EmployeeState } from "../../interfaces/types";

// Define the structure for editing an employee
interface EmployeeDetails {
  index: number; // Index of the employee in the array
  data: Employee; // Updated employee data
}

// Define the initial state of the employee slice
const initialState: EmployeeState = {
  employeeData: {
    index: -1, // No employee is selected initially
    data: undefined, // No employee data is present initially
  },
  employees: [],
  openForm: false,
  loading: false,
  submittingForm: false,
};

// Create the employee slice
const employeeSlice = createSlice({
  name: "employee", // Name of the slice
  initialState,
  reducers: {
    resetForm(state) {
      state.openForm = false;
    },
    // Reducer to handle opening/closing the employee form
    employeeFormHandler(state, action: PayloadAction<boolean>) {
      state.employeeData = {
        index: -1, // Reset selected employee
        data: undefined, // Clear employee data
      };
      state.openForm = action.payload; // Update form visibility
    },

    // Reducer to select an employee for editing
    selectEmployee(state, action: PayloadAction<number>) {
      const data = state.employees[action.payload];
      state.employeeData = {
        index: action.payload,
        data: data,
      };
      state.openForm = true; // Open the employee form
    },
  },
  // Handling extra reducers for async actions
  extraReducers(builder) {
    // Handle the pending state for fetching employees
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
    });

    // Handle the fulfilled state for fetching employees
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employee[]>) => {
        state.loading = false;
        state.employees = action.payload; // Populate the employees array
      }
    );

    // Handle the rejected state for fetching employees
    builder.addCase(fetchEmployees.rejected, (state) => {
      state.loading = false;
      state.employees = []; // Clear the employees array
    });

    // Handle the pending state for adding an employee
    builder.addCase(addEmployee.pending, (state) => {
      state.submittingForm = true;
    });

    // Handle the fulfilled state for adding an employee
    builder.addCase(
      addEmployee.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload); // Add the new employee to the list
        state.openForm = false;
        state.submittingForm = false; // Reset form submission state
      }
    );

    // Handle the rejected state for adding an employee
    builder.addCase(addEmployee.rejected, (state) => {
      state.submittingForm = false;
    });

    // Handle the pending state for editing an employee
    builder.addCase(editEmployee.pending, (state) => {
      state.submittingForm = true;
    });

    // Handle the fulfilled state for editing an employee
    builder.addCase(
      editEmployee.fulfilled,
      (state, action: PayloadAction<EmployeeDetails>) => {
        state.employees[action.payload.index] = action.payload.data; // Update the employee in the list
        state.openForm = false;
        state.submittingForm = false; // Reset form loading state
      }
    );

    // Handle the rejected state for editing an employee
    builder.addCase(editEmployee.rejected, (state) => {
      state.submittingForm = false;
    });
  },
});

// Export actions for use in components
export const { selectEmployee, employeeFormHandler, resetForm } =
  employeeSlice.actions;

// Export the reducer for integration with the Redux store
export default employeeSlice.reducer;
