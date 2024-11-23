import { Router } from "express";
import {
  getEmployees,
  addEmployee,
  editEmployee,
} from "../controllers/employee.controller";

const routes = Router();

routes.get("/", getEmployees);
routes.post("/", addEmployee);
routes.put("/:employeeId", editEmployee);

export default routes;
