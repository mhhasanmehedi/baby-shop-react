import axios from "../../utils/axios";

export const getUsers = async () => {
  const response = await axios.get(`/users`);
  return response.data;
};

export const addUser = async (data) => {
  const response = await axios.post("/users", data);
  return response.data;
};

export const editUser = async (id, data) => {
  const response = await axios.put(`/users/${id}`, data);
  return response.data;
};
