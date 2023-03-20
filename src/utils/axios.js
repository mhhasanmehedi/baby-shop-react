import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://baby-shop-api.vercel.app/",
  baseURL: "http://localhost:9000",
});

export default axiosInstance;
