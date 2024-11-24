import { Request, Response } from "express";
import Employee, {
  EmployeeAttributes,
  EmployeeCreation,
} from "../models/employee.model";

/**
 *  Function to get a list of employees
 */
export const getEmployees = async (req: Request, res: Response) => {
  try {
    // Fetch all employees from the database, ordered by creation date in descending order
    const employeeList = await Employee.findAll({
      order: [["createdAt", "DESC"]],
    });

    // Map the employee data to return only the required field
    const data = employeeList.map((employee) => {
      return {
        id: employee.getDataValue("id"),
        firstName: employee.getDataValue("firstName"),
        lastName: employee.getDataValue("lastName"),
        salutation: employee.getDataValue("salutation"),
        gender: employee.getDataValue("gender"),
        employeeNumber: employee.getDataValue("employeeNumber"),
        grossSalary: employee.getDataValue("grossSalary"),
        profileColour: employee.getDataValue("profileColour"),
      };
    });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Function to add a new employee
 */
export const addEmployee = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      grossSalary,
      salutation,
      profileColour,
      gender,
      employeeNumber,
    } = req.body as EmployeeCreation;

    // Create a new employee record in the database
    const newEmployee = await Employee.create({
      firstName,
      lastName,
      grossSalary,
      salutation,
      profileColour,
      gender,
      employeeNumber,
    });

    res.json({
      success: true,
      data: {
        id: newEmployee.getDataValue("id"),
        firstName,
        lastName,
        grossSalary,
        salutation,
        profileColour,
        gender,
        employeeNumber,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 *  Function to edit an existing employee
 */
export const editEmployee = async (req: Request, res: Response) => {
  try {
    // Find the employee by the primary key (ID) provided in the URL parameter
    const employee = await Employee.findByPk(req.params.employeeId);

    // If the employee does not exist, send a 404 response
    if (!employee) {
      res.status(404).json({
        success: false,
        message: "Employee not found",
      });
      return;
    }

    const {
      firstName,
      lastName,
      grossSalary,
      salutation,
      profileColour,
      gender,
      employeeNumber,
    } = req.body as EmployeeAttributes;

    // Update the employee record with the new details
    await employee.update({
      firstName,
      lastName,
      grossSalary,
      salutation,
      profileColour,
      gender,
      employeeNumber,
    });

    res.json({
      success: true,
      data: {
        id: employee.getDataValue("id"),
        firstName,
        lastName,
        grossSalary,
        salutation,
        profileColour,
        gender,
        employeeNumber,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
