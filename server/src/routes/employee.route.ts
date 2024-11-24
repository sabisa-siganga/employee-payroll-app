import { Router } from "express";
import {
  getEmployees,
  addEmployee,
  editEmployee,
} from "../controllers/employee.controller";
import { validateData } from "../middleware/validate";
import { EmployeeSchema } from "../middleware/schema";

const routes = Router();

routes.get("/", getEmployees); // Route to fetch all employees
routes.post("/", validateData(EmployeeSchema), addEmployee); // Route to add a new employee
routes.put("/:employeeId", validateData(EmployeeSchema), editEmployee); // Route to edit an existing employee

export default routes;
