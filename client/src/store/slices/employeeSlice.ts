import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of an Employee object
export interface Employee {
  firstName: string;
  lastName: string;
  grossSalary: string;
  salutation: string;
  profileColour: string;
  gender: string;
  employeeNumber: string;
}

// Define the structure for editing an employee
interface EmployeeDetails {
  index: number; // Index of the employee in the array
  data: Employee; // Updated employee data
}

// Define the structure of individual employee data
export interface EmployeeData {
  index: number;
  data?: Employee;
}

// Define the state structure for the employee slice
export interface EmployeeState {
  employeeData: EmployeeData;
  employees: Employee[];
  openForm: boolean;
}

// Define the initial state of the employee slice
const initialState: EmployeeState = {
  employeeData: {
    index: -1, // No employee is selected initially
    data: undefined, // No employee data is present initially
  },
  employees: [],
  openForm: false,
};

// Create the employee slice
const employeeSlice = createSlice({
  name: "employee", // Name of the slice
  initialState,
  reducers: {
    // Reducer to add a new employee
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
      state.openForm = false;
    },

    // Reducer to edit an existing employee
    editEmployee(state, action: PayloadAction<EmployeeDetails>) {
      state.employees[action.payload.index] = action.payload.data;
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
});

// Export actions for use in components
export const {
  addEmployee,
  editEmployee,
  selectEmployee,
  employeeFormHandler,
} = employeeSlice.actions;

// Export the reducer for integration with the Redux store
export default employeeSlice.reducer;
