import api from "./axios";

// Register user
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

// Login user
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};
