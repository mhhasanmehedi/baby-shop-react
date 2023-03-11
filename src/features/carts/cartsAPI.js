import axios from "../../utils/axios";

export const getCarts = async () => {
  const response = await axios.get("/carts");
  return response.data;
};

export const postCarts = async (data) => {
  const response = await axios.post("/carts", data);
  return response.data;
};
