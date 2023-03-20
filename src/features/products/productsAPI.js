import axios from "../../utils/axios";

export const getProducts = async () => {
  const response = await axios.get(`/products/`);
  return response.data;
};

export const addProduct = async (data) => {
  const response = await axios.post("/products", data);
  return response.data;
};

export const editProduct = async (id, data) => {
  const response = await axios.put(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = axios.delete(`/products/${id}`);
  return response.data;
};
