import api from "./api";

export const getPlayers = () => api.get("/players");

export const getPlayerById = (id) => api.get(`/players/${id}`);

export const addPlayer = (data) => api.post("/players", data);

export const deletePlayer = (id) => api.delete(`/players/${id}`);
