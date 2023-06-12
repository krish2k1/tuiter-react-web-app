import axios from "axios";

const USERS_URL = `https://tuiter-node-server-app-yvul.onrender.com/api/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${USERS_URL}/profile`);
  return response;
};
export const updateUser = async (user) => {
  const response = await api.put(`${USERS_URL}/${user._id}`, user);
  return response.data;
};
export const register = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/register`, {
    username,
    password,
  });
  const user = response.data;
  return user;
};
