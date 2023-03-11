import axios from "../../utils/axios";

export const getCategoryProducts = async (category) => {
  const response = await axios.get(`/products?category_like=${category}`);
  return response.data;
};
