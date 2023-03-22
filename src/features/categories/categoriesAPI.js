import axios from "../../utils/axios";

// Get categories api
export const getCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};

// Add Categories api
export const addCategory = async (data) => {
  const response = await axios.post("/categories", data);
  return response.data;
};
