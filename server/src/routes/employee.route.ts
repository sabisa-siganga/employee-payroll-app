import { Router } from "express";
import { getEmployees } from "../controllers/employee.controller";

const routes = Router();

routes.get("/", getEmployees);

export default routes;
