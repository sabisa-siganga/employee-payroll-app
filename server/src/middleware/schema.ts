import { z } from "zod";

export const EmployeeSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  grossSalary: z.string().min(1).max(100000),
  salutation: z.string().min(1).max(50),
  profileColour: z.string().min(1).max(7),
  gender: z.enum(["Male", "Female", "Unspecified"]),
  employeeNumber: z.string().min(1).max(10),
});
