import api from "./api";

export const getMatches = () => api.get("/matches");

export const scheduleMatch = (data) => api.post("/matches", data);

export const deleteMatch = (id) => api.delete(`/matches/${id}`);
