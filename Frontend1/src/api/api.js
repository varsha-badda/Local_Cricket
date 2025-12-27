import axios from "axios";

/* =========================
   AXIOS INSTANCE
   ========================= */
const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

/* =========================
   ATTACH TOKEN TO REQUESTS
   ========================= */
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

/* =========================
   AUTH
   ========================= */
export const loginUser = (data) =>
  API.post("/auth/login", data);

export const registerUser = (data) =>
  API.post("/auth/register", data);

/* =========================
   TEAMS
   ========================= */
export const getTeams = () =>
  API.get("/teams");

export const getTeamById = (id) =>
  API.get(`/teams/${id}`);

export const addTeam = (data) =>
  API.post("/teams", data);

export const updateTeam = (id, data) =>
  API.put(`/teams/${id}`, data);

export const updateTeamScore = (id, score) =>
  API.put(`/teams/${id}/score`, { score });

export const deleteTeam = (id) =>
  API.delete(`/teams/${id}`);

/* =========================
   PLAYERS
   ========================= */
export const getPlayers = () =>
  API.get("/players");

export const getPlayerById = (id) =>
  API.get(`/players/${id}`);

export const addPlayer = (data) =>
  API.post("/players", data);

export const updatePlayer = (id, data) =>
  API.put(`/players/${id}`, data);

export const deletePlayer = (id) =>
  API.delete(`/players/${id}`);




/* =========================
   MATCHES
   ========================= */
export const getMatches = () =>
  API.get("/matches");

export const scheduleMatch = (data) =>
  API.post("/matches/schedule", data);

export const deleteMatch = (id) =>
  API.delete(`/matches/${id}`);



export default API;
