// import axios from "./axiosClient";
import axios from "axios";

const fetchAllUser = () => {
    // return axios.get("/api/users?page=1");
    return axios.get("https://reqres.in/api/users?page=1");
}

export {fetchAllUser};