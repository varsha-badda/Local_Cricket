import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/teams",
});

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const getTeams = () => API.get("/");
export const addTeam = (data) => API.post("/", data);

// 👇 NEW
export const updateTeamScore = (id, score) =>
  API.put(`/${id}/score`, { score });
