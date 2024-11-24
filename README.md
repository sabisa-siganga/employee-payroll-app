# Employee Management Application

## Project Description

The **Employee Management Application** is designed to simplify the process of managing employee data within an organization. It allows users to:

- Add, edit, and manage employee records.
- Maintain detailed employee profiles with attributes such as name, salary, gender, and more.
- Utilize persistent state storage to ensure data is retained across browser sessions.

This project demonstrates the use of a modern front-end stack for form validation and state management, along with a backend server running locally at `http://localhost:4000`. The backend uses **Zod** for schema validation to ensure data integrity.

---

## Technologies Used

### Frontend

- **React**: A library for building dynamic and reusable user interfaces.
- **Redux Toolkit**: Simplified state management with built-in support for middleware and advanced patterns.
- **Redux Thunk**: Middleware for handling asynchronous operations, such as API calls.
- **TypeScript**: A typed superset of JavaScript for better code reliability and maintainability.
- **React Hook Form**: A lightweight library for handling form validation and state management on the frontend.
- **SASS**: A CSS preprocessor for cleaner and more manageable styles.
- **Redux Persist**: Ensures the Redux store state is persisted across browser reloads.

### Backend

- **Node.js**: A runtime environment for running JavaScript on the server.
- **Express.js**: A lightweight and flexible framework for building RESTful APIs.
- **Zod**: A TypeScript-first schema validation library used to validate API requests and responses.

---

## Features

1. **Frontend**:

   - A responsive UI built with React and styled with SASS.
   - State management with Redux Toolkit, ensuring predictable state transitions.
   - Form validation using **React Hook Form**, ensuring user input is validated dynamically on the client-side.
   - Persistent state across browser sessions with Redux Persist.

2. **Backend**:
   - A RESTful API running on `http://localhost:4000`.
   - Handles CRUD operations for managing employee data.
   - **Endpoint Validation**: All API requests are validated using Zod to ensure data integrity and security.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- A browser (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sabisa-siganga/employee-payroll-app.git

   cd employee-payroll-app

   ```

2. Install and Start the web server:
   cd client
   npm install
   npm start

3. Install and Start the backend server:
   cd server
   npm install
   npm run dev

4. Open your browser and navigate to:
   http://localhost:3000
