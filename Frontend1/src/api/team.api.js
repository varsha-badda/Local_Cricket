import api from "./api";

export const getTeams = () => api.get("/teams");

export const getTeamById = (id) => api.get(`/teams/${id}`);

export const addTeam = (data) => api.post("/teams", data);

export const deleteTeam = (id) => api.delete(`/teams/${id}`);

export const updateTeamScore = (id, score) =>
  api.put(`/teams/${id}/score`, { score });
