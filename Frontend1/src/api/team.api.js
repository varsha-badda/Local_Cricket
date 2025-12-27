import api from "./api";

export const getTeams = () => api.get("/teams");
export const addTeam = (data) => api.post("/teams", data);
export const deleteTeam = (id) => api.delete(`/teams/${id}`);
