import axios from "../../utils/axios";

export const getCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};
