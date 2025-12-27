import api from "./axios";



API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export const getPlayers = () => API.get("/");

// ✅ ADD THIS LINE
export const getPlayerById = (id) => API.get(`/${id}`);