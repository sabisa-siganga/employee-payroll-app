import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store/StoreProvider";

// Create a root DOM node for rendering the React app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Render the React application
root.render(
  <React.StrictMode>
    {/* Provide Redux store to the application */}
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
