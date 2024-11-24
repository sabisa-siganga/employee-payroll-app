import { Router } from "express";
import {
  getEmployees,
  addEmployee,
  editEmployee,
} from "../controllers/employee.controller";
import { validateData } from "../middleware/validate";
import { EmployeeSchema } from "../middleware/schema";

const routes = Router();

routes.get("/", getEmployees);
routes.post("/", validateData(EmployeeSchema), addEmployee);
routes.put("/:employeeId", validateData(EmployeeSchema), editEmployee);

export default routes;
