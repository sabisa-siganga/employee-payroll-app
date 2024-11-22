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
      EmployeeCode: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Employee_code",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
