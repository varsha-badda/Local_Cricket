import api from "./axios";

// Get all players
export const getPlayers = () => {
  return api.get("/players");
};

// Add new player
export const addPlayer = (data) => {
  return api.post("/players", data);
};