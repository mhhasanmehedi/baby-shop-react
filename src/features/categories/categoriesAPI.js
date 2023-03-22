import axios from "../../utils/axios";

// Get categories api
export const getCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};

// Get Category api
export const getCategory = async (id) => {
  const response = await axios.get(`/categories/${id}`);
  return response.data;
};

// Add Categories api
export const addCategory = async (data) => {
  const response = await axios.post("/categories", data);
  return response.data;
};

// Edit Categories api
export const editCategory = async (id, data) => {
  const response = await axios.put(`/categories/${id}`, data);
  return response.data;
};

// Delete Categories api
export const removeCategory = async (id) => {
  const response = await axios.delete(`/categories/${id}`);
  return response.data;
};
