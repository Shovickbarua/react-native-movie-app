import axios from 'axios';

const Moviedb = {};

const baseUrl = 'https://api.themoviedb.org/3';

Moviedb.trendingMovies = async () => {
    let url = `${baseUrl}/trending/movie/day?language=en-US`;
    const res = await axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => { return []; });
    return res;
}

Moviedb.upcomingMovies = async () => {
    let url = `${baseUrl}/trending/movie/day?language=en-US`;
    const res = await axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => { return []; });
    return res;
}

Moviedb.topRatedMovies = async () => {
    let url = `${baseUrl}/trending/movie/day?language=en-US`;
    const res = await axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => { return []; });
    return res;
}

export default Moviedb;












