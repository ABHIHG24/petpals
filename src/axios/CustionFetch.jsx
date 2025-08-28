import axios from "axios";
// const url = "http://localhost:5000";
// const url = "http://localhost:5000";
// const url = "https://petpalsbackend.onrender.com";
const url = process.env.REACT_APP_API_URL;
const CustomFetch = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export { CustomFetch, url };
