import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env === "production" ? process.env.BACKEND_URL : "http://localhost:5454"}`,
    withCredentials: true,
});

export default instance;
