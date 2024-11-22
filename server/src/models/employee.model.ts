import { DataTypes, ModelDefined, Optional } from "sequelize";
import dbSetup from "../config/db";

// Define the attributes for the Employee model, representing each Employee's properties
interface EmployeeAttributes {
  id: number;
  name: string;
  createdAt: Date;
}

type EmployeeCreationAttributes = Optional<
  EmployeeAttributes,
  "id" | "createdAt"
>;

const Employee: ModelDefined<EmployeeAttributes, EmployeeCreationAttributes> =
  dbSetup.define(
    "Employee",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "last_name",
      },
      salutation: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      employeeNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "employee_number",
      },
      grossSalary: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "gross_salary",
      },
      profileColour: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "profile_colour",
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: true,
        field: "created_at",
      },
    },
    {
      tableName: "employees",
      timestamps: false,
    }
  );

export default Employee;
