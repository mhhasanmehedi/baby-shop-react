import axios from "../../utils/axios";

export const getProducts = async (categories, search) => {
  let queryString = "";
  if (categories?.length > 0) {
    queryString += categories
      .map((category) => `category_like=${category}`)
      .join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/products/?${queryString}`);
  return response.data;
};
