# Employee Management Application

## Project Description

The **Employee Management Application** is designed to simplify the process of managing employee data within an organization. This web-based solution allows users to:

- Add, edit, and manage employee records.
- Maintain detailed employee profiles with attributes like name, gender, salutation, and more.
- Use persistent state storage to ensure data is retained across sessions.

The primary motivation for creating this app was to demonstrate clean architecture, modular design, and the integration of modern web technologies. It serves as a boilerplate for creating scalable and maintainable full-stack applications.

---

## Technologies Used

### Frontend

- **React**: A library for building user interfaces with reusable components.
- **TypeScript**: A typed superset of JavaScript that improves code reliability and developer productivity.
- **SASS**: A CSS preprocessor for cleaner and more manageable styling.
- **Tailwind CSS**: A utility-first CSS framework for building responsive, modern UI efficiently.

### Backend

- **Node.js (Express)**: A fast and lightweight framework for building RESTful APIs.

### State Management

- **Redux Toolkit**: Simplifies global state management with built-in features for actions and reducers.
- **Redux Persist**: Enables persisting the Redux store state across browser sessions.

---

## Thought Process

1. **Understanding the Problem**  
   The goal was to create an application where organizations can manage employee records effortlessly, leveraging a clear and user-friendly interface.

2. **Modular Design**

   - Split the application into reusable components (`Button`, `InputField`, `Select`, etc.).
   - Ensure that each component adheres to the Single Responsibility Principle.

3. **State Management**

   - Used **Redux Toolkit** to manage application state globally, ensuring a predictable flow.
   - Enabled persistence using **Redux Persist** to maintain state across browser reloads.

4. **Styling**

   - Combined **SASS** for nested and reusable styles with **Tailwind CSS** for rapid and responsive UI design.

5. **Backend Design**

   - Built a backend API using **Node.js (Express)** to handle CRUD operations and ensure scalability.
   - Kept the API clean and modular to support potential future integrations.

6. **User Experience**
   - Designed the app to be intuitive with minimal learning curve.
   - Focused on performance and responsiveness across devices.

---

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

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

4. Start the backend server:
   cd backend
   npm install
   npm start

5. Open your browser and navigate to:
   http://localhost:3000
