import axios from "axios";
// const url = "http://localhost:5000";
// const url = "http://localhost:5000";
const url = "https://petpalsbackend.onrender.com";
const CustomFetch = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export { CustomFetch, url };
