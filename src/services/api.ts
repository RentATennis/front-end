import axios from "axios";

export const api = axios.create({
  baseURL: "https://rent-a-tennis-json-server.onrender.com",
  timeout: 10000,
});
