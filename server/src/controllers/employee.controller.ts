import { Request, Response } from "express";
import Employee, {
  EmployeeAttributes,
  EmployeeCreation,
} from "../models/employee.model";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employeeList = await Employee.findAll({
      order: [["createdAt", "DESC"]],
    });

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

export const editEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByPk(req.params.employeeId);

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
