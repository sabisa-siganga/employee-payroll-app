export interface SelectOption {
  label: string;
  value: string | boolean | number;
}

// Define the structure of an Employee object
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  grossSalary: string;
  salutation: string;
  profileColour: string;
  gender: string;
  employeeNumber: string;
}

// Define the structure of individual employee data
export interface EmployeeData {
  index: number;
  data?: Employee;
}

// Define the state structure for the employee slice
export interface EmployeeState {
  employeeData: EmployeeData;
  employees: Employee[];
  openForm: boolean;
  loading: boolean;
  submittingForm: boolean;
}
