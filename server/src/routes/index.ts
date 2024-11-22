import { Router } from "express";
import employeeRoute from "./employee.route"; // employee related routes

export const routes = Router();

routes.use("/employees", employeeRoute);

export default routes;
