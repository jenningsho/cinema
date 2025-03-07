import { useEffect } from "react";
import { useState } from "react"
import { getTrendingMovies } from "../../services/api";
import './MovieList.css';
import { Link } from "react-router-dom";
import AddFavorites from "../AddToFavorites/AddToFavorites";

const Movies = () => {
    const [ movies, setMovies] = useState([]);
    const [ error, setError] = useState(null);
    const [ favorites, setFavorites] = useState([]);

    // Ajouter un film en favoris ou supprimer
    const toggleFavouriteMovie = (movie) => {

        const isFavorite = favorites.some( (fav) => fav.id === movie.id);

        if(isFavorite)
        {
            // supprime le film en favori
            const updateFavorites = favorites.filter( (fav) => fav.id!== movie.id);
            setFavorites(updateFavorites);
        } else {
            // ajoute le film en favori
            const updateFavorites = [...favorites, movie];
            setFavorites(updateFavorites);
        }
    };

    useEffect( () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, [])

    useEffect( () => {
        if(favorites.length > 0) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [favorites]);
    
    useEffect(() => {
        getTrendingMovies()
            .then( response => {
                console.log(response.data);
                setMovies(response.data.results); // on stock les films
            })
            .catch(err => {
                setError(err.message); // stock l'erreur 
            })
    }, []);

    if(error){
        return <div> Erreur: {error}</div>
    }
    if(!movies)
    {
        return <p>Chargement du contenu...</p>;
    }
    return (
        <div className="movies-container">
            <h1>Films du moment</h1>
            <div className="movies-list">
                {movies.map((movie) => {
                    const isFavorite = favorites.some(
                        (fav) => fav.id === movie.id
                    );
                    return (
                        <div key={movie.id} className="movie-card">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={`intitulé du film: ${movie.title}`}
                                    width={200}
                                />
                            </Link>
                            <div
                                className="overlay"
                                onClick={() => toggleFavouriteMovie(movie)}
                            >
                                <AddFavorites isFavorite={isFavorite} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Movies;