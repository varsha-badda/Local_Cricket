import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/matches",
});

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const getMatches = () => API.get("/");
export const scheduleMatch = (data) => API.post("/", data);
