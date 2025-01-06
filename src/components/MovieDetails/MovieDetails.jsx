import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../../services/api";

const MovieDetails = () => {
    const { id } = useParams(); // récuperation du parametre id de l'url
    const [ movie, setMovie] = useState(null) 
    const [ error,setError] = useState(null);

    // on charge les données de l'api
    useEffect( () => {
        getMovieDetails(id)
            .then(response => setMovie(response.data))
            .catch(err => setError(err.message));
    }, [id]); // Exécution du hook quand l'id change

    // Si erreur, on affiche l'erreur
    if(error){
        return <div>Erreur : {error} </div>;
    }
     // Si le film n'est pas encore chargé, on affiche un message de chargement
    if (!movie) {
        return <p>Chargement...</p>;
    }
    
    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // Affiche l'affiche du film
                alt={movie.title}
                width={300}
            />
        </div>
    )
}

export default MovieDetails;

