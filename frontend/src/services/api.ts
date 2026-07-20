import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL;

if (!apiBaseUrl) {
  throw new Error("VITE_API_URL is not defined");
}

export const api = axios.create({
  baseURL: `${apiBaseUrl.replace(/\/$/, "")}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
