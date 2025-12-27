import api from "./api";

export const getGrounds = () => api.get("/grounds");

export const addGround = (data) => api.post("/grounds", data);

export const deleteGround = (id) => api.delete(`/grounds/${id}`);
