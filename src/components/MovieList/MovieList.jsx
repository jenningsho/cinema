import { useEffect } from "react";
import { useState } from "react"
import { getTrendingMovies } from "../../services/api";
import './MovieList.css';
import { Link } from "react-router-dom";

const Movies = () => {
    const [ movies, setMovies] = useState([]);
    const [ error, setError] = useState(null);

    useEffect(() => {
        getTrendingMovies()
            .then( response => {
                setMovies(response.data.results); // on stock les films
                console.log(response.data); 
            })
            .catch(err => {
                setError(err.message); 
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
            <h1>Film du moment</h1>
            <div className="movies-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="aaa" width={200} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies;