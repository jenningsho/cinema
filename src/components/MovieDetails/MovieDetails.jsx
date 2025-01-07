import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../../services/api";
import "./MovieDetails.css";

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
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // Affiche l'affiche du film
                alt={movie.title}
                width={300}
            />
            <div className="movie-detail">
                <h1>{movie.title}</h1>
                <ol>
                    <li>
                        <p>Release Date:</p>
                        <p>{movie.release_date}</p>
                    </li>
                    <li>
                        <p>Rating:</p>
                        <p>{movie.vote_average}</p>
                    </li>
                </ol>
                <ol className="movie-overview">
                    <li>
                        <p>Overview:</p>
                        <p>{movie.overview}</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default MovieDetails;

