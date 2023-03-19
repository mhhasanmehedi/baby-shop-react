import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://baby-shop-api.vercel.app/",
});

export default axiosInstance;
