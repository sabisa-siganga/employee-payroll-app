import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../interfaces/types";
import ApiRequest from "../../utils/axios-instance";

interface EditEmployee {
  index: number;
  employeeId: number;
  employee: Omit<Employee, "id">;
}

export const fetchEmployees = createAsyncThunk(
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

export const addEmployee = createAsyncThunk(
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

export const editEmployee = createAsyncThunk(
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
