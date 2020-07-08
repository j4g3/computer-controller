import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8564",
});

export default api;
