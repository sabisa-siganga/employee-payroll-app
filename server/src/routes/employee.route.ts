import { Router } from "express";
import { getEmployees } from "../controllers/employee.controller";

const routes = Router();

routes.get("/", getEmployees);
routes.get("/", addEmployee);
routes.get("/", editEmployee);

export default routes;
