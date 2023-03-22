import axios from "../../utils/axios";

// Get Products api
export const getProducts = async () => {
  const response = await axios.get(`/products/`);
  return response.data;
};

// Add Product api
export const addProduct = async (data) => {
  const response = await axios.post("/products", data);
  return response.data;
};

// Edit Product Api
export const editProduct = async (id, data) => {
  const response = await axios.put(`/products/${id}`, data);
  return response.data;
};

// Delete Product Api
export const deleteProduct = async (id) => {
  const response = axios.delete(`/products/${id}`);
  return response.data;
};
