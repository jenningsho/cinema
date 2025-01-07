import axios from "axios";

// Instanciation de Axios
const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

// token d'authentification
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTY0ZjIxNTNkMTE2MzdiYWI2MzQ3ZGM4ZTNhNjYyMiIsIm5iZiI6MTczNjE2OTI3OC41MjYsInN1YiI6IjY3N2JkNzNlY2Y0ZDU5Yzg0ZjcyNGE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-URFvA5xRsjjHr_K7Wdd9P9xNSOm-TgTSvoV-MATkZU";

// intercepteur de la requete pour ajouter le token dans le headers
apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = `Bearer ${token}`;
    
    return req;
})

// récupération des films du moment de la journée
export const getTrendingMovies = () => {
    return apiMovie.get('trending/movie/day');
}

// Récupération des détails d'un film par son ID
export const getMovieDetails = (movieId) => {
    return apiMovie.get(`movie/${movieId}`); // Effectue une requête GET à l'endpoint "movie/:id"
};

// recherche film par mot clé
export const searchMovies = (query) =>{
    return apiMovie.get(`search/movie?query=${query}`)
}

export default apiMovie;
