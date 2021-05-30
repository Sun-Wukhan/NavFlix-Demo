import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// this is basically calling instance.get(/endpointHere) https://api.themoviedb.org/3/EndPointHere

export default instance