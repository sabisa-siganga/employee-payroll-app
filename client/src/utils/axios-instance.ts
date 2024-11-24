// Create a reusable Axios instance for making API requests

import axios from "axios";

// Configure the Axios instance with a base URL and default headers
const ApiRequest = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiRequest;
