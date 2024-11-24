import { z } from "zod";

// Define a Zod schema for validating employee data
export const EmployeeSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters"),

  grossSalary: z
    .string()
    .min(1, "Gross salary is required")
    .max(100000, "Gross salary cannot exceed 100000"),

  salutation: z
    .string()
    .min(1, "Salutation is required")
    .max(50, "Salutation cannot exceed 50 characters"),

  profileColour: z
    .string()
    .min(1, "Profile colour is required")
    .max(7, "Profile colour cannot exceed 7 characters"),

  gender: z.enum(["Male", "Female", "Unspecified"], {
    required_error: "Gender is required",
  }),
  employeeNumber: z
    .string()
    .min(1, "Employee number is required")
    .max(10, "Employee number cannot exceed 10 characters"),
});
