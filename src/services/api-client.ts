import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2dba18e9f2344afdbfe59243a83fa902"
    }
})