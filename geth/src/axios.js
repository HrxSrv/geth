import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://geth-ofyh.onrender.com/",
  withCredentials: true,
});