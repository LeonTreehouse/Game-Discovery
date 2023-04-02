import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "20e436dfa74340be84e78cd3d6333a74"
    }
})