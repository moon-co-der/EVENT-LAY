import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

export const loginUser = (loginData) => {
    return API.post("/auth/login", loginData);
};