import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Employee {
  firstName: string;
  fullName: string;
  lastName: string;
  grossSalary: string;
  salutation: string;
  profileColour: string;
  gender: string;
  employeeNumber: string;
}

interface EmployeeDetails {
  index: number;
  data: Employee;
}

export interface EmployeeData {
  index: number;
  data?: Employee;
}

export interface EmployeeState {
  employeeData: EmployeeData;
  employees: Employee[];
  openForm: boolean;
}

const initialState: EmployeeState = {
  employeeData: {
    index: -1,
    data: undefined,
  },
  employees: [],
  openForm: false,
};

// Create a slice
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },

    editEmployee(state, action: PayloadAction<EmployeeDetails>) {
      state.employees[action.payload.index] = action.payload.data;
    },

    employeeFormHandler(state, action: PayloadAction<boolean>) {
      state.employeeData = {
        index: -1,
        data: undefined,
      };
      state.openForm = action.payload;
    },

    selectEmployee(state, action: PayloadAction<number>) {
      const data = state.employees[action.payload];
      state.employeeData = {
        index: action.payload,
        data: data,
      };
      state.openForm = true;
    },
  },
});

export const {
  addEmployee,
  editEmployee,
  selectEmployee,
  employeeFormHandler,
} = employeeSlice.actions;
export default employeeSlice.reducer;
