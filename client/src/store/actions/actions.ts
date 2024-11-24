import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../interfaces/types";
import ApiRequest from "../../utils/axios-instance";

// Interface for editing an employee
interface EditEmployee {
  index: number;
  employeeId: number;
  employee: Omit<Employee, "id">;
}

/**
 * Thunk to fetch employees from the backend
 */
export const fetchEmployees = createAsyncThunk(
  // Action type for fetching employees
  "fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiRequest.get("/employees");

      return response.data.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Error fetching employees");
    }
  }
);

/**
 * Thunk to add a new employee
 */
export const addEmployee = createAsyncThunk(
  // Action type for adding an employee
  "addEmployee",
  async (employee: Omit<Employee, "id">, { rejectWithValue }) => {
    try {
      const response = await ApiRequest.post("/employees", employee);

      return response.data.data;
    } catch (error) {
      return rejectWithValue("Error creating employee.");
    }
  }
);

/**
 * Thunk to edit an existing employee
 */
export const editEmployee = createAsyncThunk(
  // Action type for editing an employee
  "editEmployee",
  async (data: EditEmployee, { rejectWithValue }) => {
    try {
      const response = await ApiRequest.put(
        `/employees/${data.employeeId}`,
        data.employee
      );

      return {
        index: data.index,
        data: response.data.data,
      };
    } catch (error) {
      console.error(error);
      return rejectWithValue("Error editing employee.");
    }
  }
);
