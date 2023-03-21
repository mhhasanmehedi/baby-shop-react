import axios from "../../utils/axios";

export const getRelatedProducts = async ({ category, id }) => {
  const response = await axios.get(
    `/products?category=${category}&id_ne=${id}&_limit=5`
  );
  return response.data;
};
