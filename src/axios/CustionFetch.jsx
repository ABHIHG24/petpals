import axios from "axios";
// const url = "http://localhost:5000";
// const url = "http://localhost:5000";
const URL = "https://petpalsbackend.onrender.com";
const CustomFetch = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export { CustomFetch, url };
