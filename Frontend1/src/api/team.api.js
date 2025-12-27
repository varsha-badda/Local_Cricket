import axios from "axios";


API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const getTeams = () => API.get("/");
export const addTeam = (data) => API.post("/", data);

// 👇 NEW
export const updateTeamScore = (id, score) =>
  API.put(`/${id}/score`, { score });
