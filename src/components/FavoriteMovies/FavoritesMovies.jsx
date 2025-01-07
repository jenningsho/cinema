import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddFavorites from "../AddToFavorites/AddToFavorites";

const FavoritesMovies = () => {

    const [favorites, setFavorites] = useState([]);

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
    }, []);

    if(favorites.length === 0) return <div>Aucun film favori ajouté.</div>;

    return (

        <div className="movies-container">
            <h1>Films du moment</h1>
            <div className="movies-list">
                {favorites.map((movie) => {
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
    )
}

export default FavoritesMovies;