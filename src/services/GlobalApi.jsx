import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '72d9ba8ac036d93108d2d6cd62454a15'

//https://api.themoviedb.org/3/trending/all/day?api_key=72d9ba8ac036d93108d2d6cd62454a15
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=72d9ba8ac036d93108d2d6cd62454a15'
const getTrandingMovies = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMoviesByGenreId = (id) => axios.get(movieByGenreBaseURL+"&with_genres="+id)



export default {
    getTrandingMovies,
    getMoviesByGenreId
}