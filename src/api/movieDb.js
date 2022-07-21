import axios from "axios";

const moviedb = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default moviedb;